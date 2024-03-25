"use client";

import { montserrat } from "@/utils/loadFont";
import MDEditor from "@uiw/react-md-editor";

interface MdViewerProps {
  markdown: string;
}

export default function MdViewer({ markdown }: Readonly<MdViewerProps>) {
  return (
    <MDEditor.Markdown
      source={markdown}
      style={{
        backgroundColor: "#fff",
        color: "#000",
        ...montserrat.style,
        padding: 0,
      }}
    />
  );
}
