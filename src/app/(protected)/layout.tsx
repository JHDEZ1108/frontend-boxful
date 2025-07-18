"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { ConfigProvider } from "antd";
import { lightTheme } from "../../styles/themeConfig";

const inter = Inter({ subsets: ["latin"] });

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ConfigProvider theme={lightTheme}>
            {children}
          </ConfigProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
