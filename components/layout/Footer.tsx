export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100">
      <div className="mx-auto max-w-6xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* 회사 정보 */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              채움소방
            </h3>

            <p className="text-sm leading-7 text-blue-100">
              소방시설 점검 및 소방공사 전문 업체로
              건물 안전을 위한 체계적인 점검과 관리 서비스를 제공합니다.
            </p>
          </div>


          {/* 빠른 메뉴 */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              빠른 메뉴
            </h3>

            <ul className="space-y-2 text-sm text-blue-200">

              <li>
                <a href="#about" className="hover:text-white transition">
                  회사소개
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white transition">
                  주요업무
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  문의하기
                </a>
              </li>

            </ul>
          </div>


          {/* 연락처 */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              연락처
            </h3>

            <ul className="space-y-2 text-sm text-blue-200">

              <li>
                📞 전화 :{" "}
                <a
                  href="tel:01046837119"
                  className="hover:text-white transition"
                >
                  010-4683-7119
                </a>
              </li>

              <li>
                ✉ 이메일 : chaeumfp@naver.com
              </li>

              <li className="leading-6">
                📍 주소 : 경기도 고양시 덕양구 삼원로 51
                <br />
                원흥줌하이필드 지식산업센터 318호
              </li>

            </ul>
          </div>

        </div>


        {/* 하단 카피라이트 */}
        <div className="mt-10 border-t border-blue-800 pt-6 text-center text-sm text-blue-300">
          © {new Date().getFullYear()} 채움소방. All rights reserved.
        </div>

      </div>
    </footer>
  )
}