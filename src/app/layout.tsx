import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@xyflow/react/dist/style.css";
import { ThemeProvider } from "next-themes";
import { MantineProvider } from "@mantine/core";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Artloo",
  description: "Generated by create next app",
  icons: {
    icon: "/avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
