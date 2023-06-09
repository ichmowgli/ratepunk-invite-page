import Header from "@/components/header/Header";
import "./globals.css";
import { Noto_Sans, Caveat_Brush } from "next/font/google";

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
      <body className={notoSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
