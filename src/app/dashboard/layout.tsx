import { Sidebar } from "./Sidebar";

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex ">
      <Sidebar />
      <div className="p-2">{children}</div>
    </div>
  );
}
