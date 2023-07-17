// ルートレイアウトはクライアントコンポーネントに設定できない
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>rootナビゲーション</nav>
        {children}
      </body>
    </html>
  );
}
