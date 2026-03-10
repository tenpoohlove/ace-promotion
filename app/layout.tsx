import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "合同会社エースプロモーション | ファネル構築・研修・セミナープロデュース",
  description: "ファネル構築、法人向け研修パッケージ、セミナープロデュースを通じて、企業の成長を支援します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
