import axios from "axios";
const USER_BASE_REST_API_URL = "http://localhost:8080/auth";
class UserService {
  register(user) {
    return axios.post(USER_BASE_REST_API_URL + "/signup", user);
  }
  login(user) {
    return axios.post(USER_BASE_REST_API_URL + "/login", user);
  }
  profile(token) {
    return axios.get(USER_BASE_REST_API_URL + "/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  updateProfile(token, body) {
    return axios.put(
      USER_BASE_REST_API_URL + "/updateProfile",
      body, // Đưa body vào đây, trước khi truyền headers
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}
export default new UserService();
