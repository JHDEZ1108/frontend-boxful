"use client";

import { Switch, Space } from "antd";
import { MoonFilled, SunFilled } from "@ant-design/icons";

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  return (
    <Space align="center" style={{ padding: "1rem" }}>
      <Switch
        checked={isDarkMode}
        onChange={onToggle}
        checkedChildren={<MoonFilled />}
        unCheckedChildren={<SunFilled />}
      />
    </Space>
  );
}
