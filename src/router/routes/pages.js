import { lazy } from "react";
import { LINKS } from "../../constant/linkConstant";

const PagesRoutes = [
  {
    path: LINKS.ERROR_PAGE,
    component: lazy(() => import("../../pages/auth/error")),
  },

  {
    path: LINKS.AUTH_LOGIN,
    component: lazy(() => import("../../pages/auth/login")),
  },

  {
    path: LINKS.DASHBOARD,
    component: lazy(() => import("../../pages/module/Dashboard/dashboard")),
  },
];

export default PagesRoutes;
