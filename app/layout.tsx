import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/component/navbar";
import SocialBar from "@/component/socialIcon";
import Footer from "@/component/footer";


const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cyndy-portfolio",
  description: "my portfolio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} antialiased`}>
        <Navbar />
        <SocialBar />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
