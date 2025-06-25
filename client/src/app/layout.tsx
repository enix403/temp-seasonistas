import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

// import "@/app/globals.css";
import "@/styles/global.css";
import { NextIntlClientProvider } from "next-intl";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-pjs",
  subsets: ["latin"]
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"]
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"]
// });

/* prettier-ignore */
const metropolis = localFont({
  src: [
    {
      path: "../../public/fonts/metropolis/Metropolis-Thin.otf",
      weight: "100",
      style: "normal"
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-ThinItalic.otf",
      weight: "100",
      style: "italic"
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-Light.otf",
      weight: "300",
      style: "normal"
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-LightItalic.otf",
      weight: "300",
      style: "italic"
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-RegularItalic.otf",
      weight: "400",
      style: "italic"
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-Medium.otf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-MediumItalic.otf",
      weight: "500",
      style: "italic"
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-SemiBold.otf",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-SemiBoldItalic.otf",
      weight: "600",
      style: "italic"
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-Bold.otf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-BoldItalic.otf",
      weight: "700",
      style: "italic"
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-ExtraBold.otf",
      weight: "800",
      style: "normal"
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic"
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-Black.otf",
      weight: "900",
      style: "normal"
    },
    {
      path: "../../public/fonts/metropolis/Metropolis-BlackItalic.otf",
      weight: "900",
      style: "italic"
    }
  ],
  variable: "--font-metropolis",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Seasonistas",
  description: "Seasonistas"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${metropolis.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>

      </body>
    </html>
  );
}
