import Vue from "vue";
//Import Vue Router
import Router from "vue-router";

//Import Component
import Home from "@/components/Home.vue";
import Carry from "@/components/Carry/Carry.vue";
import CarryAus from "@/components/Carry/CarryAus.vue";
import CarryThai from "@/components/Carry/CarryThai.vue";
import Send from "@/components/Send/Send.vue";
import SendAus from "@/components/Send/SendAus.vue";
import SendThai from "@/components/Send/SendThai.vue";
import CreatePost from "@/components/CreatePost.vue";
import Post from "@/components/Post/Post.vue";
import ViewPost from "@/components/Post/PostDetail/ViewPost.vue";
import ThankYou from "@/components/ThankYou.vue";
import Profile from "@/components/Profile.vue";
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";
import ThankYouSignup from "@/components/ThankYouSignup.vue";

//Use Vue Router
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      component: Home
    },
    {
      path: "/carry",
      name: "Carry",
      component: Carry
    },
    {
      path: "/carry/australia",
      name: "CarryAus",
      component: CarryAus
    },
    {
      path: "/carry/thailand",
      name: "CarryThai",
      component: CarryThai
    },
    {
      path: "/send",
      name: "Send",
      component: Send
    },
    {
      path: "/send/australia",
      name: "SendAus",
      component: SendAus
    },
    {
      path: "/send/thailand",
      name: "SendThai",
      component: SendThai
    },
    {
      path: "/post/create",
      name: "createpost",
      component: CreatePost
    },
    {
      path: "/post",
      name: "post",
      component: Post
    },
    {
      path: "/post/:postId",
      name: "viewpost",
      component: ViewPost
    },
    {
      path: "/thankyou",
      name: "ThankYou",
      component: ThankYou
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/thank_you_for_signing_up",
      name: "ThankYouSignup",
      component: ThankYouSignup
    }
  ]
});
