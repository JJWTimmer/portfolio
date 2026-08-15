import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "Jasper Timmer MSc — Solution Architect & Tech Lead",
  description:
    "Solution Architect and Tech Lead with 12+ years designing integration-heavy, cloud-native systems. Expert in Java, Spring Boot, event-driven architecture, and API design. Based in Zwolle, Netherlands.",
  keywords: [
    "Solution Architect", "Tech Lead", "Software Architect", "Java", "Spring Boot",
    "Kubernetes", "event-driven architecture", "API design", "integration architecture",
    "system design", "cloud-native", "OpenShift", "GitOps", "product engineering",
    "Zwolle", "Netherlands", "Jasper Timmer",
  ],
  authors: [{ name: "Jasper Timmer" }],
  openGraph: {
    title: "Jasper Timmer MSc — Solution Architect & Tech Lead",
    description:
      "Solution Architect and Tech Lead with 12+ years designing integration-heavy, cloud-native systems for product companies. Based in the Netherlands.",
    type: "website",
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
      </body>
    </html>
  );
}
