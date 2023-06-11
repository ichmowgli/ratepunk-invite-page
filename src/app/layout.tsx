/* eslint-disable @next/next/no-page-custom-font */
import Header from "@/components/header/Header";
import "./globals.css";
import { Noto_Sans, Caveat_Brush } from "next/font/google";
import Footer from "@/components/footer/Footer";

const notoSans = Noto_Sans({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
const caveatBrush = Caveat_Brush({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ratepunk",
  description: "Invite friends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={notoSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
