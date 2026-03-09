import { BadgeCheck, Clock3, FileText } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wider text-blue-700">
              ABOUT CHAEUM FIRE
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              정직한 점검과 책임 있는 관리로
              <br />
              건물의 안전을 지켜드립니다
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              채움소방은 소방시설 점검 및 유지관리 전문 업체로,
              소방시설관리사 직접 점검을 바탕으로 법적 기준에 맞는 정확한 점검과
              신속한 행정 처리를 지원합니다.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              단순한 점검에 그치지 않고, 건물 관리자분들이 안심하고 운영하실 수 있도록
              지속적인 관리와 실질적인 도움을 드리는 안전 파트너가 되고자 합니다.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border p-6 shadow-sm">
              <div className="mb-3 text-blue-700">
                <BadgeCheck size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                소방시설관리사 직접 점검
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                현장 경험을 바탕으로 법적 기준에 맞는 점검을 정확하게 수행합니다.
              </p>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <div className="mb-3 text-blue-700">
                <Clock3 size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                점검 주기 사전 안내
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                점검 시기를 놓치지 않도록 미리 안내드려 지속적인 관리를 돕습니다.
              </p>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <div className="mb-3 text-blue-700">
                <FileText size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                보고서 작성 및 접수 지원
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                점검 후 소방서 제출용 보고서 작성과 행정 절차까지 함께 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}