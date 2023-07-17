export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="text-blue-900 text-2xl font-bold">Appテンプレート</div>
      {children}
    </div>
  );
}
