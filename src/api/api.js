import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "1a1f9c33-2508-475a-aadd-c89b7fa5fc8d"
  }
})

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
      return response.data;
    })
  },
  getUsersFollow(id) {
    return instance.post(`follow/${id}`).then(response => {
      return response.data;
    })
  },
  getUsersUnfollow(id) {
    return instance.delete(`follow/${id}`).then(response => {
      return response.data;
    })
  },
  getUserProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI object.")
    return profileAPI.getUserProfile(userId);
  }
}

export const authAPI = {
  setAuthUser() {
    return instance.get("auth/me").then(response => {
      return response.data;
    })
  }
}

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  }
}