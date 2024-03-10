import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// 表单 Form 模块
const formRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: "System"
    },
    children: [
      {
        path: "/system/staff/list",
        element: lazyLoad(React.lazy(() => import("@/views/system/staff/list"))),
        meta: {
          requiresAuth: true,
          title: "Staffs",
          key: "staffList"
        }
      },
      {
        path: "/system/staff/add",
        element: lazyLoad(React.lazy(() => import("@/views/system/staff/add"))),
        meta: {
          requiresAuth: true,
          title: "员工Create",
          key: "staffAdd"
        }
      },
      {
        path: "/system/staff/edit",
        element: lazyLoad(React.lazy(() => import("@/views/system/staff/edit"))),
        meta: {
          requiresAuth: true,
          title: "员工Edit",
          key: "staffEdit"
        }
      },
      {
        path: "/system/role/list",
        element: lazyLoad(React.lazy(() => import("@/views/system/role/list"))),
        meta: {
          requiresAuth: true,
          title: "Roles",
          key: "roleList"
        }
      },
      {
        path: "/system/role/add",
        element: lazyLoad(React.lazy(() => import("@/views/system/role/add"))),
        meta: {
          requiresAuth: true,
          title: "角色Create",
          key: "roleAdd"
        }
      },
      {
        path: "/system/role/edit",
        element: lazyLoad(React.lazy(() => import("@/views/system/role/edit"))),
        meta: {
          requiresAuth: true,
          title: "角色Edit",
          key: "roleEdit"
        }
      }
    ]
  }
];

export default formRouter;
