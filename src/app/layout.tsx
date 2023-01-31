import { DM_Serif_Display, Montserrat } from "@next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--montserrat",
});

const dmSerif = DM_Serif_Display({
  variable: "--dmserif",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dmSerif.variable} scroll-smooth`}>
      <head />
      <body className="cursor-default select-none">{children}</body>
    </html>
  );
}
