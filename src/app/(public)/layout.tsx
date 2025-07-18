"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import { Layout, ConfigProvider } from "antd";
import { ClerkProvider } from "@clerk/nextjs";
import NavbarHome from "../../components/shared/NavbarHome";
import AppFooter from "../../components/shared/Footer";
import { darkTheme, lightTheme } from "../../styles/themeConfig";

const inter = Inter({ subsets: ["latin"] });
const { Header, Content } = Layout;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Layout style={{ minHeight: "100vh" }}>
              {/* TOP NAVBAR */}
              <Header style={{ padding: 0 }}>
                <NavbarHome
                  isDarkMode={isDarkMode}
                  onToggleTheme={() => setIsDarkMode((prev) => !prev)}
                />
              </Header>

              {/* MAIN PAGE CONTENT */}
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
      </ClerkProvider>
    </html>
  );
}
