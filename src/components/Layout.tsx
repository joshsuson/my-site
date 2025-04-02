import Header from "./Header";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ title = "Suson.Codes", children }) => {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-900 font-sans">
      <Header title={title} />
      {children}
    </main>
  );
};

export default Layout;
