import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "郗海飞 | Xi Haifei",
  description: "郗海飞艺术家个人网站 - 水彩与油画作品展示",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
