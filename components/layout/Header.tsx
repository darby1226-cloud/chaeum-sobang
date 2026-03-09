"use client"

import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">

        {/* 로고 + 회사명 */}
        <a href="#" className="flex items-center gap-2">

          <Image
            src="/images/logo.png"
            alt="채움소방 로고"
            width={28}
            height={28}
            priority
          />

          <span className="text-xl font-bold text-blue-900">
            채움소방
          </span>

        </a>

        {/* PC 메뉴 */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">

          <a href="#about" className="hover:text-blue-700">
            회사소개
          </a>

          <a href="#services" className="hover:text-blue-700">
            주요업무
          </a>

          <a href="#contact" className="hover:text-blue-700">
            문의하기
          </a>

        </nav>

        {/* 모바일 햄버거 */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-3xl leading-none text-gray-800 md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="border-t bg-white md:hidden">

          <nav className="flex flex-col gap-5 px-6 py-6 text-lg">

            <a href="#about" onClick={() => setOpen(false)}>
              회사소개
            </a>

            <a href="#services" onClick={() => setOpen(false)}>
              주요업무
            </a>

            <a href="#contact" onClick={() => setOpen(false)}>
              문의하기
            </a>

          </nav>

        </div>
      )}

    </header>
  )
}