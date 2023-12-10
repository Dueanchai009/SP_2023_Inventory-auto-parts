import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Login from "@/views/Login.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

const publicRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Stock.vue"),
  },
  {
    path: "stock",
    name: "Stock",
    component: () => import("@/views/Stock.vue"),
  },
  {
    path: "order",
    name: "Order",
    component: () => import("@/views/Order.vue"),
  },
  {
    path: "employee",
    name: "Employee",
    component: () => import("@/views/Employee.vue"),
  },
  {
    path: "report",
    name: "Report",
    component: () => import("@/views/Report.vue"),
  },
  {
    path: "problem",
    name: "Problem",
    component: () => import("@/views/Problem.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: "history",
  routes: [
    {
      path: "/",
      name: "public",
      component: DefaultLayout,
      redirect: "/",
      children: publicRoutes,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        requiresAuth: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const userDataString = localStorage.getItem("user");
  const userData = userDataString ? JSON.parse(userDataString) : {};
  const isAuthentication = userData?.isAuthentication || false;

  if (requiresAuth && !isAuthentication) {
    next("/login");
  } else if (to.path === "/login" && isAuthentication) {
    next("/");
  } else {
    next();
  }
});

export default router;
