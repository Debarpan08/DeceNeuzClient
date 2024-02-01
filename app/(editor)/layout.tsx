import EditorNavbar from "@/components/editor-navbar";
import React from "react";

const EditorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <EditorNavbar />
      <main className="mx-auto h-full w-full max-w-[1440px] px-8">
        {children}
      </main>
    </div>
  );
};

export default EditorLayout;
