import React from "react";
import { Layout } from "antd";

import Sidebar from "../components/SideBar";

const { Content, Footer } = Layout;

const MainLayout = ({ children, sideItems, sideOnSelect, ...props }) => {
  return (
    <Layout
      style={{
        minHeight: "100%",
        minWidth: "100%",
        position: "fixed" /* needed for footer positioning*/,
      }}
    >
      <Sidebar items={sideItems} onSelect={sideOnSelect} />
      <Layout className="site-layout">
        <Content
          style={{
            margin: "24px 16px 24px",
            display: "flex",
          }}
        >
          <div className="site-layout-background multiform-container">
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            maxHeight: "1rem",
            width: "100%",
          }}
        >
          Secure 3D ©2021 Created by Ale Acevedo
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
