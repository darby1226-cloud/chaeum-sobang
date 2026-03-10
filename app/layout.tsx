import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chaeum119.co.kr"),
  title: "채움소방 | 소방시설 점검 전문",
  description:
    "소방시설관리사 직접 점검, 종합점검, 작동점검, 소방안전관리 지원.",
  openGraph: {
    title: "채움소방 | 소방시설 점검 전문",
    description:
      "소방시설관리사 직접 점검, 종합점검, 작동점검, 소방안전관리 지원.",
    url: "https://www.chaeum119.co.kr",
    siteName: "채움소방",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "채움소방",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.chaeum119.co.kr",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}