import Api from "@/services/Api";

export default {
  postUserInfoById(usersId, profiles) {
    return Api().post(`users/${usersId}`, profiles);
  }
};
