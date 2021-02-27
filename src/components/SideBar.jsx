import React from "react";
import { Layout, Menu } from "antd";

import saved from "../data/saved";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
        <Menu.Item key="0">Home</Menu.Item>
        <SubMenu key="sub1" title="Saved">
          {saved.map((file, indx) => (
            <Menu.Item key={`sub-${indx}`}>{file.tittle}</Menu.Item>
          ))}
        </SubMenu>
        <Menu.Item key="2">Decrypt</Menu.Item>
        <Menu.Item key="3">Encrypt</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
