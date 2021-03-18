import React from "react";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

const renderNestedMenu = (items, nestedKey = "") => {
  return Object.keys(items).map((key) => {
    const item = items[key];
    const newKey = nestedKey === "" ? key : `${nestedKey}-${key}`;
    return item.isNested ? (
      <SubMenu key={newKey} title={item.title}>
        {renderNestedMenu(item.nested, newKey)}
      </SubMenu>
    ) : (
      <Menu.Item key={newKey}>{item.title}</Menu.Item>
    );
  });
};

const getComponent = (items, keyPath) => {
  const nextKey = keyPath[0];
  if (keyPath.length > 1)
    return getComponent(items[nextKey].nested, keyPath.slice(-1));
  return items[nextKey].component;
};

const SideBar = ({ items, onSelect, defaultSelectedKeys }) => {
  const onClick = ({ item, key }) => {
    const component = getComponent(items, key.split("-"));
    onSelect(component);
  };

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={defaultSelectedKeys}
        onSelect={onClick}
      >
        {renderNestedMenu(items)}
      </Menu>
    </Sider>
  );
};

export default SideBar;
