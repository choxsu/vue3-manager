// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

const permissionRouter = {
  path: "/permission",
  meta: {
    title: "权限管理",
    icon: "lollipop",
    rank: 10
  },
  children: [
    {
      path: "/permission/page",
      component: "/permission/page/index",
      name: "PermissionPage",
      meta: {
        title: "页面权限",
        icon: "lollipop",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/permission/button",
      component: "/permission/button/index",
      name: "PermissionButton",
      meta: {
        title: "按钮权限",
        icon: "lollipop",
        roles: ["admin", "common"],
        auths: ["btn_add", "btn_edit", "btn_delete"]
      }
    }
  ]
};
const mulMenuRouter = {
  path: "/mulMenu",
  meta: {
    title: "多菜单测试",
    icon: "lollipop",
    rank: 10
  },
  children: [
    {
      path: "/mulMenu/one",
      name: "MulMenuOne",
      meta: {
        title: "菜单1",
        icon: "lollipop",
        roles: ["admin", "common"]
      },
      children: [
        {
          path: "/mulMenu/one/page1",
          component: "/permission/page/index",
          name: "MulMenuOnePage1",
          meta: {
            title: "子菜单1",
            icon: "lollipop",
            roles: ["admin", "common"]
          }
        },
        {
          path: "/mulMenu/one/page2",
          component: "/permission/page/index",
          name: "MulMenuOnePage2",
          meta: {
            title: "子菜单2",
            icon: "lollipop",
            roles: ["admin", "common"]
          }
        }
      ]
    },
    {
      path: "/mulMenu/two",
      component: "/permission/button/index",
      name: "MulMenuTwo",
      meta: {
        title: "菜单2",
        icon: "lollipop",
        roles: ["admin", "common"],
        auths: ["btn_add", "btn_edit", "btn_delete"]
      }
    }
  ]
};

export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [permissionRouter, mulMenuRouter]
      };
    }
  }
] as MockMethod[];
