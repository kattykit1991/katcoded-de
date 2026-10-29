import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KATCODED",
  description: "KATCODED – My little world of code, creativity and chaos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <header>Hier kommt die Navbar hin</header>

        <main className="flex-1">{children}</main>

        <footer>Hier kommt der Footer hin</footer>
      </body>
    </html>
  );
}
