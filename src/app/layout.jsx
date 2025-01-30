import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DU Support | A Study Kit",
  description: "For DU, By DU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ThemeProvider
          // attribute="class"
          // defaultTheme="system"
          // enableSystem
          // disableTransitionOnChange
          > */}
          {children}
        {/* </ThemeProvider> */}
    </body>
    </html >
  );
}
