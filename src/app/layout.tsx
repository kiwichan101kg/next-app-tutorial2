import "./globals.css";
import Header from "./header";

// ルートレイアウトはクライアントコンポーネントに設定できない
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Header />
        {children}
      </body>
    </html>
  );
}
