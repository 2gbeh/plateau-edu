interface IProps {
  children: React.ReactNode;
  text: string;
  icon?: React.ReactNode;
  hasAside?: boolean;
}

export const Heading = ({ children, text, icon, hasAside = true }: IProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto w-full max-w-6xl gap-2 flex-center">
          {icon}
          <h1 className="text-3xl font-semibold">{text}</h1>
        </div>
        <div
          className={
            hasAside
              ? "mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
              : "mx-auto grid w-full max-w-6xl gap-2"
          }
        >
          {children}
        </div>
      </main>
    </div>
  );
};
