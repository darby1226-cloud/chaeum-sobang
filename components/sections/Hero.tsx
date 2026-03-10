import CallButton from "@/components/cta/CallButton"

export default function Hero() {
  return (
    <section className="bg-blue-900 pb-24 text-white">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          귀하의 소중한 자산을
          <br />
          안전으로 채우는 파트너
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-blue-100">
          <b>소방시설관리사</b>가 직접 점검
          <br />
          종합점검 · 작동점검 · 소방안전관리
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-md border border-white px-6 py-3 text-center font-semibold hover:bg-white hover:text-blue-900"
          >
            무료 상담
          </a>

          <CallButton
            className="rounded-md bg-red-600 px-6 py-3 text-center font-semibold hover:bg-red-700"
          >
            전화 상담
          </CallButton>
        </div>
      </div>
    </section>
  )
}