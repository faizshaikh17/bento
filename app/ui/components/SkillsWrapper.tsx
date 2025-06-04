'use client'

import dynamic from 'next/dynamic'

const Skills = dynamic(() => import('./Skills'), { ssr: false })

export default function HeroWrapper() {
    return <Skills />
}
