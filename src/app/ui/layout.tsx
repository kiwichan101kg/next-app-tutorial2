export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <div className="bg-pink-100 p-2 w-48">UIサイドバー</div>
      <div className="p-2">{children}</div>
    </div>
  );
}
