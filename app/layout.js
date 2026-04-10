
import { Inter, Oswald } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata = {
  title: "Aspire Fitness Club | Muvattupuzha",
  description: "Join Aspire Fitness Club in Muvattupuzha. Premium gym for bodybuilding and weight loss journeys with expert trainers and elite equipment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${oswald.variable} antialiased bg-black text-white font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
