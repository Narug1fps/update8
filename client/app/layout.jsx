import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pinster Games",
  description: "Site da Pinster Games",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="selection:bg-red-600  bg-black">
      <body className={inter.className}>{children}</body>
      <link
        rel="shortcut icon"
        href="Pinster-Games-logo.ico"
        type="image/x-icon"
      />
    </html>
  );
}
