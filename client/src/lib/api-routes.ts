export { API_BASE_URL, ApiReplyError } from "./api-decls";
import { payloadDecl, jsonDecl, wq, uploadDecl } from "./api-decls";

// prettier-ignore
export const apiRoutes = {
  /* ========================== */
  /* ========== Auth ========== */
  /* ========================== */
  login: payloadDecl(`/auth/login`),
  signUp: payloadDecl(`/auth/sign-up`),
  verifyEmail: payloadDecl(`/auth/verify`),
  forgetPasswordInit: payloadDecl(`/auth/forget-password/init`),
  forgetPasswordCheck: payloadDecl(`/auth/forget-password/check`),
  forgetPasswordSet: payloadDecl(`/auth/forget-password/set`),
  getMe: jsonDecl(`/auth/me`),
  updateMe: payloadDecl(`/auth/me`, { method: "PATCH" }),
  updatePassword: payloadDecl(`/auth/update-password`, { method: "PATCH" }),
  googleAuth: jsonDecl(`/auth/google`),
  googleCallback: jsonDecl(`/auth/google/callback`),

  /* ========================== */
  /* ======== Users ========== */
  /* ========================== */
  // Queries
  getUsers: jsonDecl(wq`/users`),
  getUser: jsonDecl((id: string) => `/users/${id}`),

  // Mutations
  createUser: payloadDecl(`/users`),
  updateUser: payloadDecl((id: string) => `/users/${id}`, { method: "PATCH" }),
  deleteUser: payloadDecl((id: string) => `/users/${id}`, { method: "DELETE" }),
  batchDeleteUsers: payloadDecl(`/users/batch-delete`, { method: "DELETE" }),

  /* ========================== */
  /* =========== Jobs ========= */
  /* ========================== */
  // Queries
  getJobs: jsonDecl(wq`/jobs`),
  getJob: jsonDecl((jobId: string) => `/jobs/${jobId}`),

  // Mutations
  postJob: payloadDecl(`/jobs`),
  updateJob: payloadDecl((jobId: string) => `/jobs/${jobId}`, { method: "PATCH" }),
  deleteJob: payloadDecl((jobId: string) => `/jobs/${jobId}`, { method: "DELETE" }),
  batchDeleteJobs: payloadDecl(`/jobs/batch-delete`, { method: "DELETE" }),

  /* ========================== */
  /* ===== Job Applications === */
  /* ========================== */
  // Queries
  getJobApplications: jsonDecl(wq`/job-applications`),
  getJobApplication: jsonDecl((id: string) => `/job-applications/${id}`),
  getJobApplicationStats: jsonDecl(wq`/job-applications/stats`),
  getJobApplicationInterviews: jsonDecl((id: string) => `/job-applications/${id}/interviews`),

  // Mutations
  applyForJob: payloadDecl(`/job-applications`),
  updateApplicationStatus: payloadDecl((id: string) => `/job-applications/${id}/status`, { method: "PATCH" }),
  withdrawApplication: payloadDecl((id: string) => `/job-applications/${id}/withdraw`, { method: "PATCH" }),
  bulkUpdateApplicationStatus: payloadDecl(`/job-applications/bulk-status-update`, { method: "PATCH" }),
  deleteJobApplication: payloadDecl((id: string) => `/job-applications/${id}`, { method: "DELETE" }),

  /* ========================== */
  /* ====== Interviews ======== */
  /* ========================== */
  // Queries
  getInterviews: jsonDecl(wq`/interviews`),
  getInterview: jsonDecl((id: string) => `/interviews/${id}`),

  // Mutations
  scheduleInterview: payloadDecl(`/interviews`),
  updateInterviewStatus: payloadDecl((id: string) => `/interviews/${id}/status`, { method: "PATCH" }),
  addInterviewFeedback: payloadDecl((id: string) => `/interviews/${id}/feedback`, { method: "PATCH" }),
  updateInterviewDetails: payloadDecl((id: string) => `/interviews/${id}`, { method: "PATCH" }),
  deleteInterview: payloadDecl((id: string) => `/interviews/${id}`, { method: "DELETE" }),

  /* ========================== */
  /* ======= Bookmarks ======== */
  /* ========================== */
  // Queries
  getBookmarks: jsonDecl(wq`/bookmarks`),
  checkBookmark: jsonDecl((type: string, itemId: string) => `/bookmarks/check/${type}/${itemId}`),
  getBookmarkStats: jsonDecl(`/bookmarks/stats`),

  // Mutations
  bookmarkIdentity: payloadDecl((identityId: string) => `/bookmarks/identities/${identityId}`),
  bookmarkJob: payloadDecl((jobId: string) => `/bookmarks/jobs/${jobId}`),
  updateBookmarkNotes: payloadDecl((bookmarkId: string) => `/bookmarks/${bookmarkId}`, { method: "PATCH" }),
  removeBookmark: payloadDecl((bookmarkId: string) => `/bookmarks/${bookmarkId}`, { method: "DELETE" }),
  removeBookmarkByItem: payloadDecl((type: string, itemId: string) => `/bookmarks/remove/${type}/${itemId}`, { method: "DELETE" }),
  batchRemoveBookmarks: payloadDecl(`/bookmarks/batch-remove`, { method: "DELETE" }),

  /* ========================== */
  /* ======= Community ======== */
  /* ========================== */
  // Queries
  getCommunityIdentities: jsonDecl(wq`/community/identities`),
  getPendingConnections: jsonDecl(`/community/connections/pending`),
  getConnections: jsonDecl(`/community/connections`),
  getFollowers: jsonDecl(`/community/followers`),
  getFollowing: jsonDecl(`/community/following`),

  // Mutations
  followIdentity: payloadDecl((identityId: string) => `/community/follow/${identityId}`),
  unfollowIdentity: payloadDecl((identityId: string) => `/community/unfollow/${identityId}`, { method: "DELETE" }),
  sendConnectionRequest: payloadDecl((identityId: string) => `/community/connect/${identityId}`),
  acceptConnection: payloadDecl((requestId: string) => `/community/connections/${requestId}/accept`),
  rejectConnection: payloadDecl((requestId: string) => `/community/connections/${requestId}/reject`),
  ignoreConnection: payloadDecl((requestId: string) => `/community/connections/${requestId}/ignore`),
  removeConnection: payloadDecl((identityId: string) => `/community/connections/${identityId}`, { method: "DELETE" }),

  /* ========================== */
  /* ========= FAQs ========== */
  /* ========================== */
  // Public Queries
  getFAQs: jsonDecl(wq`/faqs`),
  searchFAQs: jsonDecl(wq`/faqs/search`),
  getAllFAQs: jsonDecl(`/faqs/all`),
  getFAQ: jsonDecl((id: string) => `/faqs/${id}`),

  // Admin Queries
  getAdminFAQs: jsonDecl(wq`/faqs/admin`),
  getAdminFAQ: jsonDecl((id: string) => `/faqs/admin/${id}`),
  searchAdminFAQs: jsonDecl(wq`/faqs/admin/search`),
  getFAQStats: jsonDecl(`/faqs/admin/stats`),

  // Admin Mutations
  createFAQ: payloadDecl(`/faqs/admin`),
  updateFAQ: payloadDecl((id: string) => `/faqs/admin/${id}`, { method: "PATCH" }),
  deleteFAQ: payloadDecl((id: string) => `/faqs/admin/${id}`, { method: "DELETE" }),
  batchDeleteFAQs: payloadDecl(`/faqs/admin/batch-delete`, { method: "DELETE" }),
  updateFAQOrder: payloadDecl((id: string) => `/faqs/admin/${id}/order`, { method: "PATCH" }),
  bulkUpdateFAQOrder: payloadDecl(`/faqs/admin/bulk-order`, { method: "PATCH" }),

  /* ========================== */
  /* ======== Reports ======== */
  /* ========================== */
  // Queries
  getMyReports: jsonDecl(wq`/reports/my`),
  getReport: jsonDecl((id: string) => `/reports/${id}`),
  getAdminReports: jsonDecl(wq`/reports/admin/all`),
  getReportStats: jsonDecl(`/reports/admin/stats`),

  // Mutations
  createReport: payloadDecl(`/reports`),
  deleteReport: payloadDecl((id: string) => `/reports/${id}`, { method: "DELETE" }),
  updateReportStatus: payloadDecl((id: string) => `/reports/admin/${id}/status`, { method: "PATCH" }),

  /* ========================== */
  /* ======== Uploads ======== */
  /* ========================== */
  uploadFiles: uploadDecl(`/uploads`, { key: "files" }),
} as const;

if (typeof window !== "undefined") {
  // @ts-ignore
  window.apiRoutes = apiRoutes;
}
