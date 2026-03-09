export default function LegalSection() {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900">
            소방시설 자체점검은 법적 의무입니다
          </h2>
  
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            건물 관계인은 관련 법령에 따라 <strong>연 1회 이상</strong> 소방시설
            자체점검을 실시해야 합니다.
          </p>
  
          <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-gray-700">「소방시설 설치 및 관리에 관한 법률」</p>
  
            <p className="mt-2 font-semibold text-blue-900">
              제22조 (소방시설 자체점검)
            </p>
          </div>
  
          <p className="mt-6 text-gray-600">
            채움소방은 법적 기준에 맞는 정확한 점검과 소방서 제출 행정 절차까지
            함께 지원합니다.
          </p>
  
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://open.kakao.com/o/sOsoawki"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-blue-900 px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white"
            >
              카톡 상담 문의
            </a>
  
            <a
              href="tel:01046837119"
              className="rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              전화 상담
            </a>
          </div>
        </div>
      </section>
    )
  }