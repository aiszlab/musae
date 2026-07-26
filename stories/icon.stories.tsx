import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { createElement, useMemo, useState, type FC } from "react";
import { Input, Select } from "../dist";
import * as actionIcons from "../dist/components/icon/icons/action";
import * as alertIcons from "../dist/components/icon/icons/alert";
import * as avIcons from "../dist/components/icon/icons/av";
import * as communicationIcons from "../dist/components/icon/icons/communication";
import * as contentIcons from "../dist/components/icon/icons/content";
import * as deviceIcons from "../dist/components/icon/icons/device";
import * as editorIcons from "../dist/components/icon/icons/editor";
import * as fileIcons from "../dist/components/icon/icons/file";
import * as hardwareIcons from "../dist/components/icon/icons/hardware";
import * as homeIcons from "../dist/components/icon/icons/home";
import * as imageIcons from "../dist/components/icon/icons/image";
import * as mapsIcons from "../dist/components/icon/icons/maps";
import * as mockIcons from "../dist/components/icon/icons/mock";
import * as navigationIcons from "../dist/components/icon/icons/navigation";
import * as notificationIcons from "../dist/components/icon/icons/notification";
import * as placesIcons from "../dist/components/icon/icons/places";
import * as searchIcons from "../dist/components/icon/icons/search";
import * as socialIcons from "../dist/components/icon/icons/social";
import * as toggleIcons from "../dist/components/icon/icons/toggle";

const CATEGORIES: [string, Record<string, FC>][] = [
  ["action", actionIcons],
  ["alert", alertIcons],
  ["av", avIcons],
  ["communication", communicationIcons],
  ["content", contentIcons],
  ["device", deviceIcons],
  ["editor", editorIcons],
  ["file", fileIcons],
  ["hardware", hardwareIcons],
  ["home", homeIcons],
  ["image", imageIcons],
  ["maps", mapsIcons],
  ["mock", mockIcons],
  ["navigation", navigationIcons],
  ["notification", notificationIcons],
  ["places", placesIcons],
  ["search", searchIcons],
  ["social", socialIcons],
  ["toggle", toggleIcons],
];

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "8px",
};

const itemStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "96px",
  height: "88px",
  padding: "8px 4px",
  borderRadius: "8px",
  border: "1px solid #e0e0e0",
  cursor: "pointer",
  transition: "background-color 0.15s",
};

const iconWrapperStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
};

const labelStyle: React.CSSProperties = {
  fontSize: "10px",
  color: "#666",
  textAlign: "center",
  wordBreak: "break-word",
  lineHeight: 1.2,
  marginTop: "4px",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
};

const AllIcons: FC = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return CATEGORIES.map(([category, mod]) => {
      const names = Object.keys(mod).filter((name) => name.toLowerCase().includes(query));
      return [category, names.map((n) => [n, mod[n]] as const)] as const;
    }).filter(([, icons]) => icons.length > 0);
  }, [search]);

  const displayCategories =
    selectedCategory === "all" ? filtered : filtered.filter(([c]) => c === selectedCategory);

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <Input
          placeholder="Search icons..."
          value={search}
          onChange={setSearch}
          style={{ flex: 1 }}
        />
        <Select
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(String(value))}
          options={[
            { value: "all", label: "All categories" },
            ...CATEGORIES.map(([c, mod]) => ({
              value: c,
              label: `${c} (${Object.keys(mod).length})`,
            })),
          ]}
          style={{ width: "200px" }}
        />
      </div>

      {displayCategories.map(([category, icons]) => (
        <div key={category} style={{ marginBottom: "32px" }}>
          <h3 style={{ textTransform: "capitalize", marginBottom: "12px" }}>
            {category} ({icons.length} icons)
          </h3>
          <div style={containerStyle}>
            {icons.map(([name, Comp]) => (
              <div
                key={name}
                style={itemStyle}
                title={name}
                onClick={() => navigator.clipboard?.writeText(name)}
              >
                <div style={iconWrapperStyle}>{createElement(Comp as FC)}</div>
                <span style={labelStyle}>{name.replace(/^Icon/, "")}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {displayCategories.length === 0 && (
        <div style={{ textAlign: "center", color: "#999", padding: "48px" }}>
          No icons found for &quot;{search}&quot;
        </div>
      )}
    </div>
  );
};

const meta: Meta = {
  title: "icon",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {
  render: () => <AllIcons />,
};
