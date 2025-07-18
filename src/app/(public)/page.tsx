"use client";

import React from "react";
import { Button, Typography } from "antd";
import { theme } from "antd";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function HomePage() {
  const { token } = theme.useToken();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>BoxfulHome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: token.colorBgLayout,
          color: token.colorText,
          textAlign: "center",
        }}
      >
        <Typography.Title level={2} style={{ color: token.colorText }}>
          Welcome to Boxful
        </Typography.Title>

        <Typography.Paragraph style={{ maxWidth: 480 }}>
          This demo app was built as part of a technical interview process. It includes
          secure authentication (Clerk), order creation and history management,
          CSV parsing, dark/light theme toggle, and clean modular design with Ant Design.
        </Typography.Paragraph>

        <Button
          type="primary"
          size="large"
          style={{ marginTop: "1.5rem" }}
          onClick={() => router.push("/login")}
        >
          Start Demo
        </Button>
      </main>
    </>
  );
}
