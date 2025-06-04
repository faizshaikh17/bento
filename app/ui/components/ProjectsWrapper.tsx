'use client'

import dynamic from 'next/dynamic'

const Projects = dynamic(() => import('./Projects'), { ssr: false })

export default function HeroWrapper() {
    return <Projects />
}
