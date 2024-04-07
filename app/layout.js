import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chunking English",
  description: "Don't learn a word a day. Chilling and use chunks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake" suppressHydrationWarning>
      <link rel="icon" href="/icons/english.svg" sizes="any" />
      <body className={inter.className}>
        <Provider>
          <Nav />
          <main>
            {children}
          </main>
          <Footer />
        </Provider>
        <Analytics/>
      </body>
    </html>
  );
}
