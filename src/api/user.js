import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/auth/login.un",
    method: "post",
    data
  });
}

export function getInfo(token) {
  return request({
    url: "/admin/user/info.un",
    method: "post",
    params: { token }
  });
}

export function logout() {
  return request({
    url: "/auth/logout.un",
    method: "post"
  });
}
