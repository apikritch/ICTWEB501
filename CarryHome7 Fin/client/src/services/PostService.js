import Api from "@/services/Api";

export default {
  getPosts(search) {
    return Api().get("posts", {
      params: {
        search: search
      }
    });
  },
  postPosts(posts) {
    return Api().post("posts", posts);
  },
  getPostById(postsId) {
    return Api().get(`posts/${postsId}`);
  },
  putPostById(postsId, posts) {
    console.log("Test send to server");
    return Api().put(`posts/${postsId}`, posts);
  }
};
