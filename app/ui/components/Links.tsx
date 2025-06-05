'use client'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

export default function Links() {
    const controls = useAnimation()
    const contactList = [
        {
            name: "Twitter",
            link: "https://x.com/iamfaizz17",
            image: "/twitter.svg",
        },
        {
            name: "GitHub",
            link: "https://github.com/faizshaikh17",
            image: "/github.svg",
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/faizshaikh17/",
            image: "/linkedin.svg",
        },
    ];
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
            className="flex border h-fit border-neutral-800/50 z-0  w-[5rem] rounded-2xl flex-col p-0.5 cursor-grab"
            style={{ touchAction: 'none' }}>
            <div className="border flex flex-col gap-6 items-center p-4 border-neutral-800/50 z-1 rounded-2xl ">
                <span className='flex flex-col font-bold text-4xl'>
                    <span>LIN</span>
                    <span>KS.</span>
                </span>
                {
                    contactList.map(item => (
                    
                            <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={50}
                                    height={30}
                                    priority
                                />
                            </a>
                        
                    ))
                }

            </div>
        </motion.div>
    )
}
