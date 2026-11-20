import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./common-components/Header";
import Footer from "./common-components/Footer";

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope-medium",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body className={manrope.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
