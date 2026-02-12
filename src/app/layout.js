import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "МЕДИРЕН® сироп 100мл — фитопрепарат для почек и мочевыводящих путей",
  description:
    "МЕДИРЕН® — комбинированный фитопрепарат растительного происхождения. Применяется при цистите, пиелонефрите, гломерулонефрите. Мочегонное, спазмолитическое, противовоспалительное действие. Производитель: Spring Pharmaceutic.",
  keywords:
    "медирен, медирен сироп, фитопрепарат, почки, мочевыводящие пути, цистит, пиелонефрит, Spring Pharmaceutic, МЕДИРЕН",
  metadataBase: new URL("https://www.medirensirop.uz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "МЕДИРЕН® сироп 100мл — фитопрепарат для почек",
    description:
      "Комбинированный фитопрепарат растительного происхождения. Мочегонное, спазмолитическое, противовоспалительное действие.",
    url: "https://www.medirensirop.uz",
    siteName: "МЕДИРЕН",
    images: [
      {
        url: "/mediren.webp",
        width: 900,
        height: 800,
        alt: "Медирен сироп 100мл",
      },
      {
        url: "/mediren-logo.svg",
        width: 800,
        height: 600,
        alt: "Медирен логотип",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "МЕДИРЕН® сироп 100мл — фитопрепарат для почек",
    description:
      "Комбинированный фитопрепарат растительного происхождения для почек и мочевыводящих путей.",
    images: ["/mediren.webp"],
  },
  verification: {
    google: "EeNrX_Vhd4bMEJnslGv6D89shImpFKT1eTXHeeqUF8I",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* Telegram */}
        <meta property="telegram:channel" content="@SpringPharmaceutic" />
        {/* Instagram */}
        <meta
          property="instagram:account"
          content="@springpharmaceutic/"
        />
        {/* Facebook */}
        <meta
          property="article:publisher"
          content="https://www.facebook.com/spring.pharm.3/"
        />
        {/* Email */}
        <meta property="email" content="spring_pharmaceutic@gmail.com" />
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "МЕДИРЕН® сироп 100мл",
              description:
                "Комбинированный фитопрепарат растительного происхождения, оказывает мочегонное, спазмолитическое, противовоспалительное, противомикробное действие.",
              image: "https://www.medirensirop.uz/mediren.webp",
              brand: {
                "@type": "Brand",
                name: "Spring Pharmaceutic",
              },
              manufacturer: {
                "@type": "Organization",
                name: "ООО Spring Pharmaceutic",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "UZ",
                  addressRegion: "Наманганская область",
                  addressLocality: "Касансайский район",
                  streetAddress: "Кукимбой, Навбахор МСГ, улица Булак, дом 129",
                },
                telephone: "+998996942363",
                email: "spring_pharmaceutic@gmail.com",
              },
              url: "https://www.medirensirop.uz",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
