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
        url: "/og.png",
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
  verification: {
    google: "nzYyGxEG4P2D4viX1TAR6Lf6U47bngRycOYodf4WzlI",
other: {
      "naver-site-verification": "01f08b4fb35e8b6f0213258379dc937e3f71afa5",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="0b5d8c1581790c7a7a37acd294987f899259b1b5" />
      </head>
      <body>{children}</body>
    </html>
  )
}
