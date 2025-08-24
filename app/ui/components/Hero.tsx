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
            whileHover={{ 
                scale: 1.01,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
            }}
            whileTap={{ scale: 0.99 }}
            className="flex border h-fit border-neutral-800/60 z-0 sm:w-[34rem] w-[20rem] flex-wrap rounded-2xl flex-col p-0.5 cursor-grab backdrop-blur-sm"
            style={{ touchAction: 'none' }}
        >
            <div className="border space-y-10 sm:p-6 p-2 bg-[radial-gradient(circle_at_12%_23%,_rgba(255,255,255,0.12)_5%,_#0f0f0f_25%)] border-neutral-800/60 z-1 rounded-2xl backdrop-blur-sm">
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-6">
                        <Image
                            src="/anakinskywalker.jpg"
                            alt="Faizz profile picture"
                            width={50}
                            height={30}
                            priority
                            className="h-20 w-20 rounded-full ring-1 ring-white/10 shadow-lg"
                        />
                        <div className="flex flex-col">
                            <p className="text-2xl font-bold tracking-tight">Faiz</p>
                            <a href="https://x.com/iamfaizz17" target="_blank" rel="noopener noreferrer">
                                <p className="text-lg text-neutral-400 hover:text-neutral-300 transition-colors duration-300">@faizxtwt</p>
                            </a>
                        </div>
                    </div>
                    <h1 className="font-bold p-3 text-xl text-neutral-200">ファイズ</h1>
                </div>

                <div className="pb-5">
                    <div className="flex gap-1">
                        <h1 className="text-2xl font-bold tracking-tight">I build</h1>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
                            className="text-2xl font-bold tracking-tight text-white"
                        >
                            experiences
                        </motion.h1>
                    </div>
                    <h3 className="text-lg text-neutral-300">Heloo, Im Faiz a 23-year-old developer based in India</h3>
                </div>

                <div className="text-neutral-400 font-mono text-sm flex justify-between">
                    <p className="w-34">Why should I center a div again??</p>
                    <div>
                        <span className="flex text-neutral-100 items-center gap-2">
                            <motion.span 
                                className="h-[0.5rem] w-[0.5rem] bg-[#00FF0C] rounded-full relative shadow-[0_0_8px_rgba(0,255,12,0.4)]"
                                animate={{
                                    opacity: [1, 0.7, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <p>Available for work</p>
                        </span>
                        <span className="flex gap-2 justify-end text-neutral-400">
                            <p className="tabular-nums">{date},</p>
                            <p className="tabular-nums">{time}</p>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}