export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-3 md:flex">
      <a
        href="https://open.kakao.com/o/sOsoawki"
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-blue-900 bg-white px-5 py-3 font-semibold text-blue-900 shadow-lg transition hover:bg-blue-900 hover:text-white"
      >
        💬 카톡 상담
      </a>

      <a
        href="tel:01046837119"
        className="rounded-full bg-red-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-red-700"
      >
        📞 전화 상담
      </a>
    </div>
  )
}