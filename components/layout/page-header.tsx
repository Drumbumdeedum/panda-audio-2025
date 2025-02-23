import React from "react";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="bg-foreground py-12">
      <div className="px-4 md:px-8 lg:px-16">
        <h1 className="tracking-tight mb-0 text-background">{title}</h1>
        <p className="text-lg leading-none text-background/70">{subtitle}</p>
      </div>
    </header>
  );
}

export default PageHeader;
