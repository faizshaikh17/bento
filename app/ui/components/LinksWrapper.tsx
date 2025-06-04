'use client'

import dynamic from 'next/dynamic'

const Links = dynamic(() => import('./Links'), { ssr: false })

export default function HeroWrapper() {
  return <Links />
}
