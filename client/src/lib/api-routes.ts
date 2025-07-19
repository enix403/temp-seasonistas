import ky, { HTTPError } from "ky";
import { getAuthState } from "@/stores/auth-store";

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

  public static getCode(error: any) {
    if (error instanceof ApiReplyError) {
      return error.errorCode;
    }
    return "unset";
  }
}

export const apiConn = ky.extend({
  prefixUrl: unslashEnd(API_BASE_URL),
  timeout: false,
  hooks: {
    beforeRequest: [
      request => {
        let { token } = getAuthState();
        const isLoggedIn = Boolean(token);
        if (isLoggedIn) {
          request.headers.set("Authorization", `Bearer: ${token}`);
        }
        return request;
      }
    ],
    beforeError: [
      async error => {
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
      }
    ]
  }
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
  invoke
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
        method: opts?.method ?? "GET"
      }).json<any>();
    }
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
        json: payload
      }).json<any>();
    }
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
        body: formData
      }).json<any>();
    }
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
  register: payloadDecl(`/auth/register`),
  forgotPassword: payloadDecl(`/auth/forgot-password`),
  resetPassword: payloadDecl(`/auth/reset-password`),
  updatePassword: payloadDecl(`/auth/update-password`, { method: "PATCH" }),

  /* ========================== */
  /* =========== Me =========== */
  /* ========================== */
  getMe: jsonDecl(`/auth/me`),

  /* ========================== */
  /* =========== Me =========== */
  /* ========================== */
  getNotifications: jsonDecl(`/notif`),
  markNotificationsRead: payloadDecl(`/notif/mark-read`, { method: 'PATCH' }),

  /* ========================= */
  /* ======= Community ======= */
  /* ========================= */
  getCommunity: jsonDecl(wq`/community`),
  getUser: jsonDecl((userId: string) => `/user/${userId}`),
  addFriend: payloadDecl(`/add-friend`),
  isFriend: payloadDecl(`/add-friend?checkOnly=true`),
  removeFriend: payloadDecl(`/remove-friend`, { method: "DELETE" }),

  /* ========================= */
  /* ======= Favourites ====== */
  /* ========================= */
  getPostingFavourites: jsonDecl(`/posting-favourites`),
  markPostingFavourite: payloadDecl(`/mark-posting-favourite`, { method: "PATCH" }),

  /* ========================== */
  /* ======== Postings ======== */
  /* ========================== */
  // Queries
  searchJobs: jsonDecl(wq`/job/search`),
  getJob: jsonDecl((jobId: string) => `/job/${jobId}`),
  getApplication: jsonDecl((applId: string) => `/job/application/${applId}`),
  getMyApplications: jsonDecl(`/employee/my-applications`),
  getMyPostings: jsonDecl(`/employer/my-postings`),
  getJobApplicants: jsonDecl((jobId: string) => `/job/${jobId}/applicants`),
  isPostingApplied: jsonDecl((postingId: string) => `/is-posting-applied/${postingId}`),
  isEmployeeInvited: payloadDecl(`/is-employee-invited`),
  getCandidatePostingApplication: jsonDecl((postingId: string) => `/candidate-posting-application/${postingId}`),

  // Mutations
  postJob: payloadDecl(`/job/post`),
  deleteJob: payloadDecl((jobId: string) => `/job/${jobId}`, { method: "DELETE" }),
  applyToJob: payloadDecl(`/job/apply`),
  updateJobStatus: payloadDecl((jobId: string) => `/job/${jobId}/update-status`, { method: "PATCH" }),
  updateApplDecision: payloadDecl((applId: string) => `/job/application/${applId}/update-decision`, { method: "PATCH" }),
  markApplInterested: payloadDecl((applId: string) => `/job/application/${applId}/mark-interested`, { method: "PATCH" }),
  inviteEmployee: payloadDecl(`/invite-employee`),

  /* ========================== */
  /* ========= Uploads ======== */
  /* ========================== */
  uploadImage: uploadDecl(`/upload/image`, { key: "image" }),

  /* ========================== */
  /* ========== Chats ========= */
  /* ========================== */
  // getChatMessages: jsonDecl((receiverId: string) => `/chat/messages/${receiverId}`),
  // startConversation: payloadDecl(`/chat/start-conversation`),

  getConversations: jsonDecl(`/chat/conversations`),
  resumeConversationSingle: payloadDecl(`/chat/resume-conv-single`),
  updateMessage: payloadDecl(`/chat/update-message`, { method: "PATCH" }),
  deleteMessage: payloadDecl(`/chat/delete-message`, { method: "DELETE" }),

} as const;

if (typeof window !== "undefined") {
  // @ts-ignore
  window.apiRoutes = apiRoutes;
}
