import React from "react";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-foreground py-12">
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:mx-0 ">
            <h1 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
              {title}
            </h1>
            <p className="text-lg leading-none text-background/70">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
