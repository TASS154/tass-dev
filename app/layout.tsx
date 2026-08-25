import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TASS Dev — sistemas sob medida",
  description:
    "TASS Dev cria sistemas sob medida com acabamento premium. Orçamento em até 24h. Demos ao vivo e contato direto no WhatsApp.",
  keywords: [
    "TASS Dev",
    "sistemas sob medida",
    "desenvolvimento web",
    "portfólio",
    "orçamento",
    "Next.js",
  ],
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "TASS Dev — sistemas sob medida",
    description:
      "Produtos digitais premium. Orçamento em até 24h — fale no WhatsApp.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-charcoal font-sans text-ice">{children}</body>
    </html>
  );
}
