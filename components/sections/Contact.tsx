import CallButton from "@/components/cta/CallButton"

import Image from "next/image"
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"

const phoneNumber = "01046837119"

const handleCall = () => {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

  if (isMobile) {
    window.location.href = `tel:${phoneNumber}`
  } else {
    navigator.clipboard.writeText(phoneNumber)
    alert("전화번호가 복사되었습니다.\n010-4683-7119")
  }
}

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* 왼쪽 문의 안내 */}
          <div>

            <p className="text-sm font-semibold tracking-wider text-blue-700">
              CONTACT
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              소방 점검이 필요하시면
              <br />
              지금 바로 문의해 주세요
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-600">
              채움소방은 소방시설 점검, 소방안전관리, 행정 처리 지원까지
              정확하고 신속하게 도와드립니다.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="https://open.kakao.com/o/sOsoawki"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-blue-900 px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white"
              >
                <MessageCircle size={18} />
                카톡 문의
              </a>

              <CallButton
                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                <Phone size={18} />
                전화 문의
              </CallButton>

            </div>
          </div>

          {/* 오른쪽 정보 카드 */}
          <div className="rounded-2xl bg-white p-8 text-gray-900 shadow-lg">

            <h3 className="text-xl font-semibold text-blue-900">
              문의 안내
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">
                <Phone className="mt-1 text-blue-700" size={20} />
                <div>
                  <p className="font-semibold">대표번호</p>
                  <p className="text-gray-600">010-4683-7119 / 010-4684-7119</p>
                  <p className="mt-1 text-sm text-gray-500">
                    사무실 031-815-7119
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="mt-1 text-blue-700" size={20} />
                <div>
                  <p className="font-semibold">오픈카카오톡</p>
                  <a
                    href="https://open.kakao.com/o/sOsoawki"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 underline underline-offset-4"
                  >
                    카카오톡으로 바로 문의하기
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-blue-700" size={20} />
                <div>
                  <p className="font-semibold">이메일</p>
                  <p className="text-gray-600">chaeumfp@naver.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-blue-700" size={20} />
                <div>
                  <p className="font-semibold">주소</p>
                  <p className="text-gray-600">
                    경기도 고양시 덕양구 삼원로 51(원흥동)
                    <br />
                    원흥줌하이필드지식산업센터 318호
                  </p>
                </div>
              </div>

              {/* 명함 */}
              <div className="mt-6 border-t pt-6">

                <p className="mb-3 text-sm font-semibold text-gray-700">
                  채움소방 명함
                </p>

                <Image
                  src="/images/business-card.jpg"
                  alt="채움소방 명함"
                  width={400}
                  height={250}
                  className="rounded-md border"
                />

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}