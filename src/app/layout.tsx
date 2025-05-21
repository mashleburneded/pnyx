import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { cn } from "../../lib/utils";
import ClientBody from "./ClientBody";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Pnyx Institute - Empowering Future Innovators",
  description: "Join Pnyx Institute to gain cutting-edge skills in technology and design through innovative courses and expert-led bootcamps.",
  openGraph: {
    title: "Pnyx Institute - Empowering Future Innovators",
    description: "Gain cutting-edge skills through Pnyx Institute's innovative courses.",
    type: "website",
    url: "https://www.pnyxinstitute.com", // Placeholder URL
    images: [{ url: "https://ext.same-assets.com/1232453280/849522504.png" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pnyx Institute - Empowering Future Innovators",
    description: "Gain cutting-edge skills through Pnyx Institute's innovative courses.",
    images: ["https://ext.same-assets.com/1232453280/849522504.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add your analytics tracking scripts here (e.g., Google Analytics, Plausible) */}
      </head>
      <ClientBody
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          roboto.variable
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </ClientBody>
    </html>
  );
}
