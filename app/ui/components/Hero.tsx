'use client'

import Image from "next/image"
import { motion, useAnimation } from 'framer-motion'

export default function Hero() {
    const controls = useAnimation()

    return (
        <motion.div
            drag
            onMouseLeave={() => {
                controls.start({ x: 0, y: 0, transition: { type: 'tween', stiffness: 500, damping: 50 } })
            }}
            animate={controls}
            className="flex border border-neutral-900 z-0 rounded-2xl flex-col p-0.5 cursor-grab"
            style={{ touchAction: 'none' }}
        >
            <div className="flex border border-neutral-900 z-0 rounded-2xl flex-col p-0.5">
                <div className="border space-y-10 p-6 bg-[radial-gradient(circle_at_12%_23%,_rgba(255,255,255,0.09)_5%,_#111111_25%)] border-neutral-900 z-1 rounded-2xl">
                    <div className="flex justify-between items-start w-[34rem]">
                        <div className="flex items-center gap-6">
                            <Image
                                src="/anakinskywalker.jpg"
                                alt="Faizz profile picture"
                                width={50}
                                height={30}
                                priority
                                className="h-20 w-20 rounded-full"
                            />
                            <div className="flex flex-col gap-1.5">
                                <p className="text-2xl font-bold">Faizz</p>
                                <p className="text-lg">@iamfaizz17</p>
                            </div>
                        </div>
                        <h1 className="font-bold text-xl">Fz</h1>
                    </div>
                    <div className="pb-5">
                        <h1 className="text-2xl font-bold">I build webapp</h1>
                        <h3 className="text-lg">Hello there, a 23-year-old developer based in India</h3>
                    </div>
                    <div className="text-gray-400 flex justify-between">
                        <p className="w-32">How do I center a div again??</p>
                        <span className="flex items-center gap-2">
                            <span className="h-[0.5rem] w-[0.5rem] bg-[#39ff14] rounded-full relative beat-animation" />
                            <p className="text-gray-400">Available for work</p>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}
