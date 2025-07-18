"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import { Layout, ConfigProvider } from "antd";
import NavbarHome from "../components/shared/NavbarHome";
import { lightTheme, darkTheme } from "../styles/themeConfig";
import AppFooter from "../components/shared/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const { Header, Content, Footer } = Layout;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <Layout style={{ minHeight: "100vh" }}>
            {/* NAVBAR */}
            <Header style={{ padding: 0 }}>
              <NavbarHome
                isDarkMode={isDarkMode}
                onToggleTheme={() => setIsDarkMode((prev) => !prev)}
              />
            </Header>

            {/* MAIN CONTENT */}
            <Content style={{ padding: "0 50px", marginTop: 64 }}>
              <div style={{ padding: 24 }}>
                {children}
              </div>
            </Content>

            {/* FOOTER */}
            <AppFooter />
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
