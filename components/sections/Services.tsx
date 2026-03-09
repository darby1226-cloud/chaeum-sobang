import { ShieldCheck, Flame, ClipboardCheck } from "lucide-react"

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            주요업무
          </h2>

          <p className="mt-4 text-gray-600">
            채움소방은 법적 기준에 맞는 정확한 점검과 신속한 행정 처리를 제공합니다.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="mb-5 text-blue-700">
              <ShieldCheck size={36} />
            </div>

            <h3 className="mb-3 text-xl font-semibold">소방시설 종합점검</h3>

            <p className="leading-relaxed text-gray-600">
              건물 내 설치된 소방시설 전체를 점검하여 정상 작동 여부와 법적 기준
              충족 여부를 확인합니다.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="mb-5 text-blue-700">
              <Flame size={36} />
            </div>

            <h3 className="mb-3 text-xl font-semibold">작동점검</h3>

            <p className="leading-relaxed text-gray-600">
              화재 감지기, 소화설비 등 주요 소방시설이 실제 상황에서도 정상적으로
              작동하는지 확인합니다.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="mb-5 text-blue-700">
              <ClipboardCheck size={36} />
            </div>

            <h3 className="mb-3 text-xl font-semibold">소방안전관리</h3>

            <p className="leading-relaxed text-gray-600">
              정기 점검부터 소방서 제출 보고서 작성까지 소방안전관리 업무를
              체계적으로 지원합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}