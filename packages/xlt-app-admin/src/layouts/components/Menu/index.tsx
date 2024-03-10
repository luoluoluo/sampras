import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { getOpenKeys, searchRoute } from "@/utils/util";
import type { MenuProps } from "antd";
import * as Icons from "@ant-design/icons";
import "./index.less";
import { can } from "@/utils/auth";

type MenuItem = Required<MenuProps>["items"][number];
const LayoutMenu = (props: any) => {
  const { pathname } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const menu: {
    items: MenuItem[];
  } = {
    items: [
      { key: "/home/index", label: "Home", icon: <Icons.HomeOutlined /> },
      {
        key: "/system",
        label: "System",
        icon: <Icons.SettingOutlined />,
        disabled: !can("query.staffs") && !can("query.roles"),
        children: [
          { key: "/system/staff/list", label: "Staffs", disabled: !can("query.staffs") },
          { key: "/system/role/list", label: "Roles", disabled: !can("query.roles") }
        ]
      }
    ]
  };

  // Deletedisable的menu
  // const handleDisabledMenu = (menuItems: any[]) => {
  //   if (!menuItems) return [];
  //   menuItems.map((v, k) => {
  //     if (v?.children) {
  //       menuItems[k].children = handleDisabledMenu(menuItems[k].children);
  //     }
  //     if (menuItems[k].disabled) {
  //       menuItems.splice(k, 1);
  //     }
  //   });
  //   return menuItems;
  // };
  // menu.items = handleDisabledMenu(menu.items);

  // 刷新页面菜单保持高亮
  useEffect(() => {
    const key = decodeURIComponent(pathname);
    setSelectedKeys([key]);
    setOpenKeys(getOpenKeys(key));
    // handleDisabledMenu;
  }, [pathname]);

  // 设置当前展开的 subMenu
  const onOpenChange = (openKeys: string[]) => {
    if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys);
    const latestOpenKey = openKeys[openKeys.length - 1];
    if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
    setOpenKeys([latestOpenKey]);
  };

  // 点击当前菜单跳转页面
  const navigate = useNavigate();
  const clickMenu: MenuProps["onClick"] = ({ key }: { key: string }) => {
    const route = searchRoute(key, props.menuList);
    if (route.isLink) window.open(route.isLink, "_blank");
    navigate(key);
  };

  return (
    <Menu
      mode="inline"
      triggerSubMenuAction="click"
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      items={menu.items}
      onClick={clickMenu}
      onOpenChange={onOpenChange}
    ></Menu>
  );
};

export default LayoutMenu;
