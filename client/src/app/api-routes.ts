import ky, { HTTPError } from "ky";
import { getAuthState } from "./providers/auth-state";

function unslashStart(str: string) {
  return str.replace(/^\/+/, "");
}

function unslashEnd(str: string) {
  return str.replace(/\/+$/, "");
}

export const API_BASE_URL: string = process.env.NEXT_PUBLIC_API_URL as any;

if (!API_BASE_URL) {
  throw new Error("Env variable `NEXT_PUBLIC_API_URL` not set");
}

export class ApiReplyError extends HTTPError {
  constructor(
    parent: HTTPError,
    public readonly errorMessage: string,
    public readonly errorCode: string
  ) {
    super(parent.response, parent.request, parent.options);
    this.name = "ApiReplyError";
    this.message = errorMessage;
  }

  public static check(error: any): error is ApiReplyError {
    return error instanceof ApiReplyError;
  }

  public static userMessage(error: any) {
    if (error instanceof ApiReplyError) {
      return error.errorMessage;
    }
    return "An error occured";
  }
}

export const apiConn = ky.extend({
  prefixUrl: unslashEnd(API_BASE_URL),
  timeout: false,
  hooks: {
    beforeRequest: [
      (request) => {
        let { isLoggedIn, token } = getAuthState();
        if (isLoggedIn) {
          request.headers.set("Authorization", `Bearer: ${token}`);
        }
        return request;
      },
    ],
    beforeError: [
      async (error) => {
        const { response } = error;

        let isApiReplyError = false;
        let reply: any = null;

        if (response && response.body) {
          reply = await response.json();
          if (reply["isApiReplyError"] === true) {
            isApiReplyError = true;
          }
        }

        if (isApiReplyError) {
          const { errorMessage, errorCode } = reply!;
          return new ApiReplyError(error, errorMessage, errorCode);
        }

        return error;
      },
    ],
  },
});

if (typeof window !== "undefined") {
  // @ts-ignore
  window.apiConn = apiConn;
}

function decl<
  UrlT extends string | ((...args: UrlArgs) => string),
  UrlArgs extends any[],
  FuncArgs extends any[],
  FuncRet
>({
  url,
  invoke,
}: {
  url: UrlT;
  invoke: (url: UrlT, ...args: FuncArgs) => FuncRet;
}) {
  return async (...args: FuncArgs): Promise<any> => {
    try {
      return await invoke(url, ...args);
    } catch (e) {
      console.log("API-CALL-ERR: Request failed", e);
      throw e;
    }
  };
}

function toUrl<UrlT extends string | ((...args: any) => string)>(
  url: UrlT,
  args: MaybeParameters<UrlT>
) {
  let urlString = typeof url === "string" ? url : url(...args);
  urlString = unslashStart(urlString);
  return urlString;
}

type MaybeParameters<T> = T extends (...args: infer R) => any ? R : [];

function jsonDecl<UrlT extends string | ((...args: any) => string)>(
  url: UrlT,
  opts?: { method?: string }
) {
  return decl({
    url,
    invoke: (url, ...args: MaybeParameters<UrlT>) => {
      return apiConn(toUrl(url, args), {
        method: opts?.method ?? "GET",
      }).json<any>();
    },
  });
}

function payloadDecl<UrlT extends string | ((...args: any) => string)>(
  url: UrlT,
  opts?: { method?: string }
) {
  return decl({
    url,
    invoke: (url, payload: any, ...args: MaybeParameters<UrlT>) => {
      return apiConn(toUrl(url, args), {
        method: opts?.method ?? "POST",
        json: payload,
      }).json<any>();
    },
  });
}

function uploadDecl<UrlT extends string | ((...args: any) => string)>(
  url: UrlT,
  opts?: {
    method?: string;
    key?: string;
  }
) {
  const key = opts?.key ?? "file";

  return decl({
    url,
    invoke: (url, file: File, ...args: MaybeParameters<UrlT>) => {
      const formData = new FormData();
      formData.set(key, file);

      return apiConn(toUrl(url, args), {
        method: opts?.method ?? "POST",
        body: formData,
      }).json<any>();
    },
  });
}

/* ------------------------ */

function wq<Q = string | Record<string, any> | URLSearchParams>(
  template: TemplateStringsArray
) {
  let url = template.join("");
  return (queryParams?: Q) => {
    let query = "";

    if (queryParams) {
      if (typeof queryParams === "string") {
        query = "?" + queryParams;
      } else {
        const urlSearchParams =
          queryParams instanceof URLSearchParams
            ? queryParams
            : new URLSearchParams(queryParams);

        query = "?" + urlSearchParams.toString();
      }
    }

    return url + query;
  };
}

/* ------------------------ */

// prettier-ignore
export const apiRoutes = {
  /* ========================== */
  /* ========== Auth ========== */
  /* ========================== */
  login: payloadDecl(`/auth/login`),
  register: payloadDecl(`/auth/sign-up`),
  verifyEmail: payloadDecl(`/auth/verify`),
  forgotPasswordInit: payloadDecl(`/auth/forget-password/init`),
  forgotPasswordCheck: payloadDecl(`/auth/forget-password/check`),
  forgotPasswordSet: payloadDecl(`/auth/forget-password/set`),
  getCurrentUser: jsonDecl(`/auth/me`),
  updateCurrentUser: payloadDecl(`/auth/me`, { method: "PATCH" }),
  updatePassword: payloadDecl(`/auth/update-password`, { method: "PATCH" }),
  googleAuth: jsonDecl(`/auth/google`),

  /* ========================== */
  /* ========== User ========== */
  /* ========================== */
  // Queries
  searchUsers: jsonDecl(wq`/users`),
  getUser: jsonDecl((userId: string) => `/users/${userId}`),
  // Mutations
  createUser: payloadDecl(`/users`),
  updateUser: payloadDecl((userId: string) => `/users/${userId}`, { method: "PATCH" }),

  /* ========================== */
  /* ========== Jobs ========== */
  /* ========================== */
  // Queries
  searchJobs: jsonDecl(wq`/jobs`),
  getJob: jsonDecl((jobId: string) => `/jobs/${jobId}`),
  // Mutations
  postJob: payloadDecl(`/jobs`),
  deleteJob: payloadDecl((jobId: string) => `/jobs/${jobId}`, { method: "DELETE" }),

  /* ========================== */
  /* ===== Applications ====== */
  /* ========================== */
  // Queries
  searchApplications: jsonDecl(wq`/job-applications`),
  getApplication: jsonDecl((applicationId: string) => `/job-applications/${applicationId}`),
  // Mutations
  applyForJob: payloadDecl(`/job-applications`),

  /* ========================== */
  /* ====== Interviews ======= */
  /* ========================== */
  // Queries
  searchInterviews: jsonDecl(wq`/interviews`),
  getInterview: jsonDecl((interviewId: string) => `/interviews/${interviewId}`),
  // Mutations
  scheduleInterview: payloadDecl(`/interviews`),

  /* ========================== */
  /* ======= Community ======= */
  /* ========================== */
  // Queries
  searchCommunity: jsonDecl(wq`/community`),
  getCommunityMember: jsonDecl((memberId: string) => `/community/${memberId}`),

  /* ========================== */
  /* ======= Bookmarks ======= */
  /* ========================== */
  // Queries
  getBookmarks: jsonDecl(wq`/bookmarks`),
  // Mutations
  addBookmark: payloadDecl(`/bookmarks`),
  removeBookmark: payloadDecl((bookmarkId: string) => `/bookmarks/${bookmarkId}`, { method: "DELETE" }),

  /* ========================== */
  /* ========== FAQs ========== */
  /* ========================== */
  // Queries
  searchFAQs: jsonDecl(wq`/faqs`),
  getAllFAQs: jsonDecl(`/faqs/all`),

  /* ========================== */
  /* ======== Reports ======== */
  /* ========================== */
  // Queries
  searchReports: jsonDecl(wq`/reports/admin/all`),
  // Mutations
  createReport: payloadDecl(`/reports`),

  /* ========================== */
  /* ======== Uploads ======== */
  /* ========================== */
  uploadImage: uploadDecl(`/upload/image`, { key: "image" }),

  /* ========================== */
  /* ======== Health ========= */
  /* ========================== */
  healthCheck: jsonDecl(`/health`),
} as const;

if (typeof window !== "undefined") {
  // @ts-ignore
  window.apiRoutes = apiRoutes;
}
