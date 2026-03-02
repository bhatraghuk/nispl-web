import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Netiquette Info Solutions - AI-Powered Digital Transformation",
  description: "Engineering intelligent digital systems. AI-powered web, mobile, and enterprise platforms built for scale by Netiquette Info Solutions Pvt. Ltd.",
  keywords: ["Netiquette", "AI", "Machine Learning", "Web Development", "Mobile Apps", "Enterprise Solutions", "Digital Transformation", "Artificial Intelligence"],
  authors: [{ name: "Netiquette Info Solutions Pvt. Ltd." }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Netiquette Info Solutions - AI-Powered Digital Transformation",
    description: "Engineering intelligent digital systems. AI-powered web, mobile, and enterprise platforms built for scale.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netiquette Info Solutions - AI-Powered Digital Transformation",
    description: "Engineering intelligent digital systems. AI-powered web, mobile, and enterprise platforms built for scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="lqFlgdBeNjEmBhmseu9IkGtaudEHgtqOwM3Mr1Refdc" />
        <meta name="msvalidate.01" content="BEC5ECE802A8A53BCC27EFE370E239B4" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
