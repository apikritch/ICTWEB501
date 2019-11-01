import Api from "@/services/Api";

export default {
  getAllPosts() {
    return Api().get("posts");
  }
};
