import type { Metadata } from "next";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import "./globals.css";

const tildaSans = localFont({
  src: "../public/fonts/TildaSans-VF.woff",
  variable: "--font-tilda-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "АлтайГид",
  description:
    "Путеводитель по Республике Алтай и Алтайскому краю. Турбазы, кемпинги, туристические комплексы, базы отдыха на Алтае, санатории. Каталог турфирм, туроператоров по Алтаю. Карта Горного Алтая, описания объектов, фотографии.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${tildaSans.variable} antialiased`}>
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
