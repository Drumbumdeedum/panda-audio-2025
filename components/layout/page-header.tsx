type PageHeaderProps = {
  title: string;
  subtitle: string;
};

function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="bg-foreground py-12">
      <div className="px-4 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-2 text-background">{title}</h1>
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
