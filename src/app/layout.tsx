import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-screen">
          <ThemeProvider>
            <div className="relative flex flex-col items-center max-w-[1800px] mx-auto">
              {children}
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
