import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "手记 · Exception",
  description:
    "一些碎片。不是日记，不是博客，只是随手记下的东西。凌晨群聊里的念头，和某种不需要完整也能存在的写法。",
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="min-h-full bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 p-4 transition-colors">
        {children}
      </body>
    </html>
  );
}