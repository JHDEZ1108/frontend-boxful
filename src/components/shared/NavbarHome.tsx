"use client";

import React from "react";
import { Layout, Divider, Space, theme } from "antd";
import BoxfulIcon from "./BoxfulIcon";
import ThemeToggle from "./ThemeToggle";

const { Header } = Layout;

interface NavbarHomeProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const NavbarHome: React.FC<NavbarHomeProps> = ({ isDarkMode, onToggleTheme }) => {
  const { token } = theme.useToken();

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        backgroundColor: token.colorBgLayout,
        borderBottom: `1px solid ${token.colorBorderSecondary ?? "#d9d9d9"}`,
      }}
    >
      <Space align="center">
        <BoxfulIcon />
        <Divider type="vertical" style={{ height: "24px", margin: "0 16px" }} />
      </Space>

      <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
    </Header>
  );
};

export default NavbarHome;
