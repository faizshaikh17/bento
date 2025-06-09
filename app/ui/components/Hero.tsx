'use client'

import Image from "next/image"
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from "react"

export default function Hero() {
    const controls = useAnimation()
    const [time, setTime] = useState<string>("")
    const [date, setDate] = useState<string>("")


    useEffect(() => {

        const now = new Date()
        setDate(now.toLocaleDateString())

        const interval = setInterval(() => {
            const now = new Date()
            const hours = now.getHours().toString().padStart(2, '0')
            const minutes = now.getMinutes().toString().padStart(2, '0')
            const seconds = now.getSeconds().toString().padStart(2, '0')
            setTime(`${hours}:${minutes}:${seconds}`)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            drag
            dragElastic={1}
            onMouseUpCapture={() => {
                controls.start({
                    x: 0,
                    y: 0,
                    transition: { type: 'spring', stiffness: 100, damping: 50 }
                })
            }}
            animate={controls}
            className="flex border h-fit border-neutral-800/50 z-0 sm:w-[34rem] w-[20rem] flex-wrap rounded-2xl flex-col p-0.5 cursor-grab"
            style={{ touchAction: 'none' }}>
                <div className="border space-y-10 sm:p-6 p-2 bg-[radial-gradient(circle_at_12%_23%,_rgba(255,255,255,0.09)_5%,_#111111_25%)] border-neutral-800/50 z-1 rounded-2xl ">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-6">
                            <Image
                                src="/anakinskywalker.jpg"
                                alt="Faizz profile picture"
                                width={50}
                                height={30}
                                priority
                                className="h-20 w-20 rounded-full"
                            />
                            <div className="flex flex-col gap-1">
                                <p className="text-2xl font-bold">Faizz</p>
                                <a href="https://x.com/iamfaizz17" target="_blank" rel="noopener noreferrer">
                                    <p className="text-lg">@iamfaizz17</p>
                                </a>
                            </div>
                        </div>
                        <h1 className="font-bold p-3 text-xl">ファイズ</h1>
                    </div>

                    <div className="pb-5">
                        <div className="flex gap-1">
                            <h1 className="text-2xl font-bold">I build</h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-2xl font-bold"
                            >
                                webapps
                            </motion.h1>
                        </div>
                        <h3 className="text-lg">Heloo, Faiz a 23-year-old developer based in India</h3>
                    </div>

                    <div className="text-gray-400 font-mono text-sm flex justify-between">
                        <p className="w-34">Why should I center a div again??</p>
                        <div>
                            <span className="flex text-gray-100 items-center gap-2">
                                <span className="h-[0.5rem] w-[0.5rem] bg-[#00FF0C] rounded-full relative beat-animation" />
                                <p>Available for work</p>
                            </span>
                            <span className="flex gap-2 justify-end">
                                <p>{date},</p>
                                <p>{time}</p>
                            </span>
                        </div>
                    </div>
                </div>
        </motion.div>
    )
}
