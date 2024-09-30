import { APIurls } from "../constants.js";
import apiService from ".";
import multipart from "./multipart.js";

export const ApiRequests = {
  //user Authentication
  login: async (data) => await apiService.post(APIurls.login, data),
  logout: async (data) => await apiService.post(APIurls.logout, data),
  googleLogout: async (data) =>
    await apiService.get(APIurls.googleLogout, data),

  register: async (data) => await apiService.post(APIurls.register, data),
  authenticate: async () => await apiService.get(APIurls.authenticate),
  refreshTokens: async (data) =>
    await apiService.post(APIurls.refreshTokens, data),
  revokeToken: async (data) => await apiService.post(APIurls.revokeToken, data),

  // organization
  getProfile: async (id) => await apiService.get(APIurls.profile),

  createOrganization: async (data) =>
    await apiService.post(APIurls.organizations, data),
  deleteOrganization: async (id) =>
    await apiService.delete(APIurls.organizations + "/" + id),
  // deleteOrganization: async ({ id, data }) => await apiService.patch(APIurls.organizations + "/" + id, data),
  getOrganizations: async (params) =>
    await apiService.get(APIurls.organizations, { params }),
  getOrganization: async (id) =>
    await apiService.get(APIurls.organizations + "/" + id + "/name"),
  getOrganizationsByMail: async (params) =>
    await apiService.get(APIurls.bymail, { params }),
  getOrganizationsMembership: async (params) =>
    await apiService.get(APIurls.membership, { params }),

  // People crud
  createOwner: async (data) => await apiService.post(APIurls.members, data),
  createOwnerInvite: async (data) =>
    await apiService.post(APIurls.inviteUser, data),
  createUserExport: async (data) =>
    await apiService.post(APIurls.userExport, data),
  createUserImport: async (data) =>
    await multipart.post(APIurls.userImport, data),
  createUserRole: async (data) => await apiService.post(APIurls.userRole, data),

  getOwners: async (params) =>
    await apiService.get(APIurls.members, { params }),
  getOwner: async (user_id) =>
    await apiService.get(APIurls.members + "/" + user_id),
  updateOwner: async ({ data, id }) =>
    await apiService.patch(APIurls.members + "/" + id, data),
  deleteOwner: async (id) =>
    await apiService.delete(APIurls.members + "/" + id),
  membersCheckUsername: async (user_id) =>
    await apiService.get(APIurls.membersCheckUsername + "/" + user_id),
  filterClassBaseStudents: async (classId) =>
    await apiService.get(APIurls.filterClassBaseStudents + "/" + classId),

  deleteMultipleUsers: async ({ params }) =>
    await apiService.delete(APIurls.deleteMultipleUsers, { params }),

  // Class crud
  createClass: async (data) => await apiService.post(APIurls.classes, data),
  getClasss: async (params) =>
    await apiService.get(APIurls.classes, { params }),
  getClass: async (id) => await apiService.get(APIurls.classes + "/" + id),
  updateClass: async ({ data, id }) =>
    await apiService.patch(APIurls.classes + "/" + id, data),
  deleteClass: async (id) =>
    await apiService.delete(APIurls.classes + "/" + id),

  // assign class
  assignClass: async (data) => await apiService.post(APIurls.assignClass, data),
  assignAllStudentsToClass: async (data) =>
    await apiService.post(APIurls.assignAllStudentsToClass, data),

  getStudentsOfAssignClass: async (id) =>
    await apiService.get(APIurls.getStudentsOfAssignClass + "/" + id),
  deleteStudentFromClass: async (id) =>
    await apiService.delete(APIurls.deleteStudentFromClass + "/" + id),

  // Addresses crud
  createAddresses: async (data) =>
    await apiService.post(APIurls.addresses, data),
  getaAdressess: async (params) =>
    await apiService.get(APIurls.addresses, { params }),
  getAddresses: async (id) =>
    await apiService.get(APIurls.addresses + "/" + id),
  updateAddresses: async ({ data, id }) =>
    await apiService.patch(APIurls.addresses + "/" + id, data),
  deleteAddresses: async (id) =>
    await apiService.delete(APIurls.addresses + "/" + id),

  // Content crud
  getContents: async (params) =>
    await apiService.get(APIurls.contents, { params }),
  // getContent: async ({ queryParams, id }) => await apiService.get(APIurls.contents + "/" + id, queryParams),

  // getContent: async (queryParams, id) => {
  //   console.log("🚀 ~ getContent: ~ queryParams:", queryParams, id);
  //   let url = `${APIurls.contents}/${id}`;
  //   let queryString = Object.keys(queryParams)
  //     .map(
  //       (key) =>
  //         `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
  //     )
  //     .join("&");
  //   if (queryString) {
  //     url += `?${queryString}`;
  //   }
  //   return await apiService.get(url);
  // },

  getContent: async (queryParams, id) => {
    console.log("🚀 ~ getContent: ~ queryParams, id:", queryParams, id)
    let url = `${APIurls.contents}/${id}`;
    if (queryParams && Object.keys(queryParams).length > 0) {
      let queryString = Object.keys(queryParams)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
        .join('&');
      if (queryString) {
        url += `?${queryString}`;
      }
    }
    return await apiService.get(url);
  },



  contentUpdate: async ({ id, data }) =>
    await multipart.patch(APIurls.contents + "/" + id, data),

  //////////////////////////////

  createContent: async ({ data, options }) =>
    await multipart.post(APIurls.userContents, data, options),
  getUserContents: async (params) =>
    await apiService.get(APIurls.userContents, { params }),
  updateContent: async ({ data, id }) =>
    await apiService.patch(APIurls.userContents + "/" + id, data),
  deleteContent: async (id) =>
    await apiService.delete(APIurls.userContents + "/" + id),

  // reations==========

  getContentReacts: async (id) =>
    await apiService.get(APIurls.userContentsReact + "/" + id),
  updateContentReact: async ({ data, id }) => {
    const token = JSON.parse(localStorage.getItem("app-access-token"));
    return await apiService.patch(`${APIurls.userContentsReact}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },
  deleteContentReact: async ({ data, id }) =>
    await apiService.delete(APIurls.userContentsReact + "/" + id, data),

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Addresses crud
  createTimeStamp: async (data) =>
    await apiService.post(APIurls.timestamp, data),
  getTimeStamps: async (params) =>
    await apiService.get(APIurls.timestamp, { params }),
  // getTimeStamp: async (id) =>
  //   await apiService.get(APIurls.timestamp + "/" + id),
  getTimeStamp: async (queryParams, id) => {
    console.log("🚀 ~ getTimeStamp: ~ queryParams, id:", queryParams, id)
    let url = `${APIurls.timestamp}/${id}`;
    if (queryParams && Object.keys(queryParams).length > 0) {
      let queryString = Object.keys(queryParams)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
        .join('&');
      if (queryString) {
        url += `?${queryString}`;
      }
    }
    return await apiService.get(url);
  },
  updateTimeStamp: async ({ data, id }) =>
    await apiService.patch(APIurls.timestamp + "/" + id, data),
  deleteTimeStamp: async (id) =>
    await apiService.delete(APIurls.timestamp + "/" + id),

  // reations==========

  getTimeStampReacts: async (id) =>
    await apiService.get(APIurls.timeStampReact + "/" + id),
  // updateTimeStampReact: async ({ data, id }) =>
  //   await apiService.patch(APIurls.timeStampReact + "/" + id, data),

  updateTimeStampReact: async ({ data, id }) => {
    const token = JSON.parse(localStorage.getItem("app-access-token"));
    return await apiService.patch(`${APIurls.timeStampReact}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },

  deleteTimeStampReact: async ({ data, id }) =>
    await apiService.delete(APIurls.timeStampReact + "/" + id, data),

  //////////////////////////////

  createLink: async ({ data, options }) =>
    await apiService.post(APIurls.userLinks, data, options),
  getUserLinks: async (params) =>
    await apiService.get(APIurls.userLinks, { params }),
  // getUserLink: async (id) => await apiService.get(APIurls.userLinks + "/" + id),
  getUserLink: async (queryParams, id) => {
    console.log("🚀 ~ getUserLink: ~ queryParams:", queryParams, id);
    let url = `${APIurls.userLinks}/${id}`;
    let queryString = Object.keys(queryParams)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
      )
      .join("&");
    if (queryString) {
      url += `?${queryString}`;
    }
    return await apiService.get(url);
  },

  updateLink: async ({ data, id }) =>
    await apiService.patch(APIurls.userLinks + "/" + id, data),
  deleteLink: async (id) =>
    await apiService.delete(APIurls.userLinks + "/" + id),

  // reations==========

  getLinkReacts: async (id) =>
    await apiService.get(APIurls.userLinksReact + "/" + id),
  updateLinkReact: async ({ data, id }) =>
    await apiService.patch(APIurls.userLinksReact + "/" + id, data),

  deleteLinkReact: async ({ data, id }) =>
    await apiService.delete(APIurls.userLinksReact + "/" + id, data),


  // perfomer
  createPerformer: async ({ data, options }) =>
    await multipart.post(APIurls.Performers, data, options),
  getPerformers: async (params) =>
    await apiService.get(APIurls.Performers, { params }),
  getPerformer: async ({ id }) =>
    await apiService.get(APIurls.Performers + "/" + id),
  updatePerformer: async ({ data, id }) =>
    await multipart.patch(APIurls.Performers + "/" + id, data),
  deletePerformer: async (id) =>
    await apiService.delete(APIurls.Performers + "/" + id),
};
