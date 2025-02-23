import clsx from "clsx";
import React from "react";

type PageContentProps = {
  children: React.ReactNode;
  type?: "narrow" | "default";
};

function PageContent({ type = "default", children }: PageContentProps) {
  return (
    <div
      className={clsx(
        `${
          type === "default"
            ? "p-4 md:p-8 lg:p-16 space-y-8"
            : "px-4 md:px-24 xl:px-64 2xl:px-72 py-4 md:py-16 space-y-8"
        } `
      )}
    >
      {children}
    </div>
  );
}

export default PageContent;
