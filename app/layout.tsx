import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FormFieldsContextProvider } from "./context/stateContext";
import { NextAuthProvider } from "./AuthProvider/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soul Champ",
  description: "For Champions By Champions!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <FormFieldsContextProvider>{children}</FormFieldsContextProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
