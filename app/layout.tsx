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
  title: "Jasper Timmer MSc. — Tech Lead & Software Architect",
  description:
    "Tech Lead and Software Architect with 12+ years building enterprise and cloud-native systems. Specialising in Java, Spring Boot, Kubernetes, and DevOps. Based in Zwolle, Netherlands.",
  keywords: [
    "Tech Lead", "Software Architect", "Java", "Spring Boot", "Kubernetes",
    "DevOps", "Cloud-native", "OpenShift", "Zwolle", "Netherlands",
    "Jasper Timmer", "backend developer", "software engineer",
  ],
  authors: [{ name: "Jasper Timmer" }],
  openGraph: {
    title: "Jasper Timmer MSc. — Tech Lead & Software Architect",
    description:
      "Tech Lead and Software Architect with 12+ years building enterprise and cloud-native systems in the Netherlands.",
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
