import { Inter } from "next/font/google";
import "./style.css"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>{metadata.title}</h1>
          <p>{metadata.description}</p>
        </header>
        {children}
        <footer>
          <p>
            Created by{" "}
            <a href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
              Vercel
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
