import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

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
  metadataBase: new URL("https://jaspertimmer.nl"),
  title: "Jasper Timmer MSc — Solution Architect & Tech Lead",
  description:
    "Solution Architect and Tech Lead with 13+ years designing integration-heavy, cloud-native systems. Expert in Java, Spring Boot, event-driven architecture, and API design. Based in Zwolle, Netherlands.",
  keywords: [
    "Solution Architect", "Tech Lead", "Software Architect", "Java", "Spring Boot",
    "Kubernetes", "event-driven architecture", "API design", "integration architecture",
    "system design", "cloud-native", "OpenShift", "GitOps", "product engineering",
    "Zwolle", "Netherlands", "Jasper Timmer",
  ],
  authors: [{ name: "Jasper Timmer" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jasper Timmer MSc — Solution Architect & Tech Lead",
    description:
      "Solution Architect and Tech Lead with 13+ years designing integration-heavy, cloud-native systems for product companies. Based in the Netherlands.",
    url: "https://jaspertimmer.nl",
    siteName: "Jasper Timmer MSc",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasper Timmer MSc — Solution Architect & Tech Lead",
    description:
      "Solution Architect and Tech Lead with 13+ years designing integration-heavy, cloud-native systems. Based in Zwolle, Netherlands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://rybbit.lab.jt-cloud.nl/api/script.js"
          data-site-id="b6924e951f31"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
