import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import { Rosario } from "next/font/google";
import { ThemeProvider } from "@/components/Theme-Provider";
import { Metadata as mData } from "@/constants/Meta";

const font = Rosario({
  subsets: ["latin"],
});

export const metadata: Metadata = mData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll">
      <Head>
        <meta
          name="google-site-verification"
          content="hcmUVD9Z980Mb3ueRfyryxsObeKlNgrYfY7br2Eaenk"
        />
      </Head>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
