// import Image from "next/image"
import { motion, useAnimation } from 'framer-motion'
// import { useEffect, useState } from "react"

export default function Skills() {
    const controls = useAnimation()
    const frontendSkills = ['React', 'NextJs', 'TailwindCSS', 'Shadcn', 'Framer-Motion']
    const backendSkills = ['Nodejs', 'Expressjs']
    const toolsServices = ['MongoDB', 'Postman', 'Git', 'Github']

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
            className="flex border h-fit border-neutral-800/50 z-0 rounded-2xl flex-col p-0.5 cursor-grab"
            style={{ touchAction: 'none' }}
        >
            <div className="border space-y-4 h-full w-[18rem] sm:p-4 p-2 bg-[radial-gradient(circle_at_12%_23%,_rgba(255,255,255,0.09)_5%,_#111111_25%)] border-neutral-800/50 z-1 rounded-2xl">
                <div className='flex flex-col text-6xl gap-4 font-bold'>
                    <div className='flex gap-3 hover:gap-6 transition-all duration-300 ease-in-out'>
                        <span>{"{"}</span><span>{"}"}</span>
                    </div>
                    <div>
                        <p>TECH</p>
                        <p>STACK</p>
                    </div>
                </div>

                <div className="group relative h-2 w-full bg-neutral-800 rounded-2xl overflow-hidden">
                    <div className="absolute left-0 top-0 h-full bg-white w-0 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                </div>


                <div className='space-y-1.5'>
                    <p className='text-lg font-bold'>Frontend:</p>
                    <div className='flex flex-wrap gap-2 text-sm font-bold'>
                        {frontendSkills.map((item) => (
                            <span
                                key={item}
                                className='flex border border-neutral-800/80 z-0 rounded-lg flex-col p-0.5 cursor-grab hover:border-white/50'
                            >
                                <span className="flex border px-2 bg-[#181717] border-neutral-800/50 z-0 rounded-lg flex-col p-0.5 cursor-grab">
                                    {item}
                                </span>
                            </span>
                        ))}
                    </div>
                </div>

                <div className='space-y-1.5'>
                    <p className='text-lg font-bold'>Backend:</p>
                    <div className='flex flex-wrap gap-2 text-sm font-bold'>
                        {backendSkills.map((item) => (
                            <span
                                key={item}
                                className='flex border border-neutral-800/80 z-0 rounded-lg flex-col p-0.5 cursor-grab hover:border-white/50'
                            >
                                <span className="flex border px-2 bg-[#181717] border-neutral-800/50 z-0 rounded-lg flex-col p-0.5 cursor-grab">
                                    {item}
                                </span>
                            </span>
                        ))}
                    </div>
                </div>

                <div className='space-y-1.5'>
                    <p className='text-lg font-bold'>Tools & Services:</p>
                    <div className='flex flex-wrap gap-2 text-sm font-bold'>
                        {toolsServices.map((item) => (
                            <span
                                key={item}
                                className='flex border border-neutral-800/80 z-0 rounded-lg flex-col p-0.5 cursor-grab hover:border-white/50'
                            >
                                <span className="flex border px-2 bg-[#181717] border-neutral-800/50 z-0 rounded-lg flex-col p-0.5 cursor-grab">
                                    {item}
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
