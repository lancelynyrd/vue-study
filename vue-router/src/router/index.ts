import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue"; 

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("@/views/ContactUs.vue")
  },
  {
    path: "/contact-us/:foo/:bar?",
    name: "ContactUsParams",
    // props: true,
    component: () => import("@/views/ContactUs.vue")
  },
  {
    path: '/user/:id',
    name: "user",
    component: () => import("@/views/User.vue"),
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'profile',
        component: () => import("@/views/Profile.vue"),
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'posts',
        component: () => import("@/views/Posts.vue"),
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: '',
        component: () => import("@/views/UserHome.vue"),
      }
    ]
  },
  {
    path: "/:pathMatch(.*)",
    name: "Home",
    component: Home
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
