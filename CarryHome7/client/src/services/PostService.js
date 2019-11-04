import Api from "@/services/Api";

export default {
  getAllPosts() {
    return Api().get("posts");
  },
  postPosts(posts) {
    return Api().post("posts", posts);
  },
  getPostById(postsId) {
    return Api().get(`posts/${postsId}`);
  }
};
