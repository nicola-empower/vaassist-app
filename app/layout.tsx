import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "VAAssist - Portfolio Demo",
  description: "Virtual Assistant Dashboard Demo",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="flex h-screen w-full">
          <Sidebar />
          <main className="flex-1 h-screen overflow-y-auto p-8 md:p-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
