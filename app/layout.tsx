import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansSC = Noto_Sans_SC({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"],
  variable: "--font-noto" 
});

export const metadata: Metadata = {
  title: "FrameX - AI影视创作平台",
  description: "从创意到分镜，一键生成可拍摄的完整方案",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} ${notoSansSC.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
