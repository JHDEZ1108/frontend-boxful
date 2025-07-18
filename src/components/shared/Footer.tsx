// src/components/shared/Footer.tsx
import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Creado con ❤️ por <span style={{ fontWeight: "bold" }}>Josué Hernández</span>
    </Footer>
  );
};

export default AppFooter;
