import { Metadata } from "next";
import { Fira_Sans, Fira_Code } from "next/font/google";
import "./styles/globals.css"

//* fonts
const Fira = Fira_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  style: ["italic", "normal"],
});

export const FiraCode = Fira_Code({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  variable: '--font-fira-code'
});

// * Metadata - head tag
export const metadata: Metadata = {
  title: "Best of Python",
  description:
    "Find out what' trending, or get inspired by open source projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Fira.className}>
      <body>{children}</body>
    </html>
  );
}
