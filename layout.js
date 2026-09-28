import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Quiet Clean Repairs | Houston Handyman Services",
  description:
    "Careful, tidy home repairs in Houston. Drywall, doors, fixtures, painting, carpentry and more. Free estimates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
