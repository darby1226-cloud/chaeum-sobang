import CallButton from "@/components/cta/CallButton"

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-white md:hidden">
      <div className="grid grid-cols-2">
        <a
          href="https://open.kakao.com/o/sOsoawki"
          target="_blank"
          rel="noreferrer"
          className="bg-white py-4 text-center font-semibold text-blue-900"
        >
          카톡 문의
        </a>

        <CallButton
          className="bg-red-600 py-4 text-center font-semibold text-white"
        >
          전화 상담
        </CallButton>
      </div>
    </div>
  )
}