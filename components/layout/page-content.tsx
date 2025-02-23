import React from "react";

type PageContentProps = {
  children: React.ReactNode;
};

function PageContent({ children }: PageContentProps) {
  return <div className="px-4 md:px-8 lg:px-16 space-y-20">{children}</div>;
}

export default PageContent;
