import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider} from "next-intl";
import "./globals.css";

interface RootLayoutProps { children: React.ReactNode; params: {locale: string}};

// A list of all locales that are supported
const locales = ['en', 'fr'];

export const metadata: Metadata = {
  title: "Arctic Wallet",
  description: "Generated by create next app",
};

export default async function LocaleLayout({children, params}: RootLayoutProps) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        </body>
    </html>
  );
}