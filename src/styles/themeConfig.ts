// src/styles/themeConfig.ts
import { ThemeConfig, theme } from "antd";

export const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#1677ff",
    colorBgLayout: "#ffffff",       
    colorBgBase: "#f5f5f5",    
    colorText: "#1f1f1f",
    colorLink: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    borderRadius: 6,
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    controlHeight: 36,
  },
};

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#00b96b",
    colorBgLayout: "#141414",
    colorBgBase: "#1f1f1f",  
    colorText: "#ffffff",
    colorLink: "#00b96b",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff7875",
    borderRadius: 6,
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    controlHeight: 36,
  },
};
