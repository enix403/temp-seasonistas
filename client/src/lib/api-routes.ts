export { API_BASE_URL, ApiReplyError } from "./api-decls";
import { payloadDecl, jsonDecl, wq, uploadDecl } from "./api-decls";

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
