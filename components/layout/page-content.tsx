import clsx from "clsx";

type PageContentProps = {
  children: React.ReactNode;
  type?: "narrow" | "default";
};

function PageContent({ type = "default", children }: PageContentProps) {
  return (
    <div
      className={clsx(
        "max-w-[1440] mx-auto",
        `${
          type === "default"
            ? "p-4 md:p-8 lg:p-16 space-y-8 "
            : "px-4 md:px-24 xl:px-48 py-4 md:py-16 space-y-8"
        } `
      )}
    >
      {children}
    </div>
  );
}

export default PageContent;
