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
import CreatePostAus from "@/components/CreatePostAus.vue";
import CreatePostThai from "@/components/CreatePostThai.vue";
import EditPost from "@/components/EditPost.vue";
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
      component: Home,
      props: true
    },
    {
      path: "/carry",
      name: "Carry",
      component: Carry,
      props: true
    },
    {
      path: "/carry/australia",
      name: "CarryAus",
      component: CarryAus,
      props: true
    },
    {
      path: "/carry/thailand",
      name: "CarryThai",
      component: CarryThai,
      props: true
    },
    {
      path: "/send",
      name: "Send",
      component: Send,
      props: true
    },
    {
      path: "/send/australia",
      name: "SendAus",
      component: SendAus,
      props: true
    },
    {
      path: "/send/thailand",
      name: "SendThai",
      component: SendThai,
      props: true
    },
    {
      path: "/post/aus/create",
      name: "createpostaus",
      component: CreatePostAus,
      props: true
    },
    {
      path: "/post/thai/create",
      name: "createpostthai",
      component: CreatePostThai,
      props: true
    },
    {
      path: "/post",
      name: "post",
      component: Post,
      props: true
    },
    {
      path: "/post/:postId",
      name: "viewpost",
      component: ViewPost,
      props: true
    },
    {
      path: "/post/:postId/edit",
      name: "editpost",
      component: EditPost,
      props: true
    },
    {
      path: "/thankyou",
      name: "ThankYou",
      component: ThankYou,
      props: true
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      props: true
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      props: true
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
      props: true
    },
    {
      path: "/thank_you_for_signing_up",
      name: "ThankYouSignup",
      component: ThankYouSignup,
      props: true
    }
  ]
});
