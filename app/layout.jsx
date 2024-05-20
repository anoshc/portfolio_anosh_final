import { Dancing_Script, Raleway } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const dancingscript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancingscript",
});

export const metadata = {
  title: "Anosh portfolio",
  description: "Utviklet av Anosh Chaudhry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dancingscript.variable}, ${raleway.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
