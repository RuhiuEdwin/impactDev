import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "../globals.css";

// Import all font weights of Montserrat
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  title: string;
  description: string; // Adding description prop
  favicon: string;
  children: React.ReactNode;
}

export default function RootLayout({
  title,
  description, // Using description prop
  favicon,
  children,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />
        <meta
          name="keywords"
          content="sustainability, international trade, SMEs, climate, development, eco-friendly, renewable energy, corporate social responsibility, CSR, sustainable development, SDG, ESG"
        />
        <meta name="author" content="Edwin Ruhiu" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph and Twitter Cards */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={favicon} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={favicon} />

        {/* Canonical Link */}
        <link rel="canonical" href="https://impactower.com/" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`{
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Impact Tower",
            "url": "https://impactower.com/",
            "logo": "${favicon}",
            "description": "${description}"
          }`}
        </script>
      </Head>
      {children}
    </>
  );
}
