import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar/NavBar";
import Sidebar from "@/components/shared/Sidebar/Sidebar";
import FlowBiteInit from "@/utils/FlowBiteInit";

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
        {/* FlowBite Initial Javascript required by the component bello, Don't Remove this otherwise FlowBite functional Component won't be work */}
        <FlowBiteInit />
        <NavBar></NavBar>
        <Sidebar></Sidebar>
        <div className="mt-16 sm:mt-14 sm:ml-64">
          {children}
        </div>
      </body>
    </html>
  );
}
