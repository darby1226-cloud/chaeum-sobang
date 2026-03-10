"use client"

import { ReactNode } from "react"
import { Phone } from "lucide-react"

type CallButtonProps = {
  className?: string
  phoneNumber?: string
  displayNumber?: string
  showIcon?: boolean
  children?: ReactNode
}

export default function CallButton({
  className = "",
  phoneNumber = "01046837119",
  displayNumber = "010-4683-7119",
  showIcon = true,
  children,
}: CallButtonProps) {
  const handleCall = async () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`
      return
    }

    try {
      await navigator.clipboard.writeText(displayNumber)
      alert(`전화번호가 복사되었습니다.\n${displayNumber}`)
    } catch {
      alert(`전화번호를 복사해주세요.\n${displayNumber}`)
    }
  }

  return (
    <button onClick={handleCall} className={className}>
      {children ?? "전화 문의"}
    </button>
  )
}