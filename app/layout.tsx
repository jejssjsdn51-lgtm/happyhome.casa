import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Quicksand } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import "./globals.css";


const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Happy Home Casa",
  description: "Texas Trusted Home Source",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${quicksand.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Footer />
      </body>

    </html>
  );
}

