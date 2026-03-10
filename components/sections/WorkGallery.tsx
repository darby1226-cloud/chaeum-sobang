import Image from "next/image"
import CallButton from "@/components/cta/CallButton"

const works = [
  {
    title: "가스계 소화설비 점검",
    desc: "대형 시설에 설치된 가스계 소화설비의 정상 작동 여부를 점검합니다.",
    image: "/images/fire-inspection-1.jpg",
  },
  {
    title: "감지기 작동 점검",
    desc: "연기 감지기 및 화재 감지 장치의 정상 작동 여부를 확인합니다.",
    image: "/images/fire-inspection-2.jpg",
  },
  {
    title: "가스 누출 감지 시스템 점검",
    desc: "가스 누출 감지 장비 및 경보 시스템의 정상 작동 상태를 확인합니다.",
    image: "/images/fire-inspection-3.jpg",
  },
  {
    title: "비상등 점검",
    desc: "정전 상황에서도 정상적으로 작동하는지 비상조명 장치를 점검합니다.",
    image: "/images/fire-inspection-4.jpg",
  },
  {
    title: "소방 펌프 설비 점검",
    desc: "화재 발생 시 작동하는 소방 펌프 및 배관 설비 상태를 점검합니다.",
    image: "/images/fire-inspection-5.jpg",
  },
  {
    title: "현장 점검 사례",
    desc: "현장 여건에 맞춘 소방설비 점검과 안전관리 업무를 수행합니다.",
    image: "/images/fire-inspection-6.png",
  },
]

export default function WorkGallery() {
  return (
    <section id="work" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold tracking-wider text-blue-700">
            WORK GALLERY
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            실제 점검 현장 사례
          </h2>

          <p className="mt-4 text-gray-600">
            채움소방은 다양한 시설에서 소방설비 점검과 관리 서비스를 수행하고 있습니다.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <div
              key={work.title}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {work.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  {work.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border bg-white p-8 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">
            실제 점검 사례가 궁금하신가요?
          </h3>

          <p className="mt-3 text-gray-600">
            건물 유형과 설비 환경에 맞는 점검 사례를 안내해드립니다.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://open.kakao.com/o/sOsoawki"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-blue-900 px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white"
            >
              카톡 문의
            </a>

            <CallButton
              className="rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              전화 문의
            </CallButton>
          </div>

          <a
            href="https://blog.naver.com/ysr9005"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-sm font-semibold text-blue-700 underline underline-offset-4"
          >
            블로그에서 더 많은 사례 보기
          </a>
        </div>
      </div>
    </section>
  )
}