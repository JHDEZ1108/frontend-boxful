// src/styles/themeConfig.ts
import { ThemeConfig, theme } from "antd";

export const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#1677ff",
    colorBgLayout: "#ffffff",
    colorText: "#1f1f1f",
    borderRadius: 6,
  },
};

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#00b96b",
    colorBgLayout: "#141414",
    colorText: "#ffffff",
    borderRadius: 6,
  },
};
