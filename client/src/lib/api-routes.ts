export { API_BASE_URL, ApiReplyError } from "./api-decls";
import { payloadDecl, jsonDecl, wq, uploadDecl } from "./api-decls";

// prettier-ignore
export const apiRoutes = {
  /* ========================== */
  /* ========== Auth ========== */
  /* ========================== */
  login: payloadDecl(`/auth/login`),

  /* ========================== */
  /* =========== Me =========== */
  /* ========================== */
  getMe: jsonDecl(`/auth/me`),
  updateMe: jsonDecl(`/auth/me`, { method: "PATCH" }),

  /* ========================== */
  /* ========== Jobs ========== */
  /* ========================== */
  // Queries
  getJobs: jsonDecl(wq`/jobs`),
  getJob: jsonDecl((jobId: string) => `/jobs/${jobId}`),

  // Mutations
  postJob: payloadDecl(`/jobs`),
  deleteJob: payloadDecl((jobId: string) => `/jobs/${jobId}`, { method: "DELETE" }),

  /* ========================== */
  /* ========= Uploads ======== */
  /* ========================== */
  uploadImage: uploadDecl(`/uploads`),
} as const;

if (typeof window !== "undefined") {
  // @ts-ignore
  window.apiRoutes = apiRoutes;
}
