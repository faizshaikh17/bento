import { motion, useAnimation } from 'framer-motion'

export default function Projects() {
    const controls = useAnimation()

    const projectDetails = [
        {
            name: 'Lofi.Station',
            live: 'https://lofistation.vercel.app/',
            github: 'https://github.com/faizshaikh17/LoFi.Station',
            technologies: ['React', 'Javascript', 'Redux', 'Tailwind CSS', 'Grok Ai'],
            image: '/1.jpg',
            description: 'Lofi Station is your 24/7 cozy companion, a soothing online lofi radio web application crafted with love.'
        },
        {
            name: 'Clipe',
            live: 'https://clipe.vercel.app/',
            github: 'https://github.com/faizshaikh17/clip',
            technologies: ['React', 'Javascript', 'Tailwind CSS', 'Grok Ai'],
            image: '/2.jpg',
            description: `Clipe. is your go-to tool for turning code into share-worthy art. It transforms your code snippets into beautifully styled visuals with gradient backgrounds and multiple UI themes — perfect for social media, blogs, or developer portfolios.

            With a slick, responsive interface and vibrant customization options, Clipe. makes it easy to showcase your code in style. Plus, with the built-in export button, you can instantly download your snippet as a high-quality PNG image.`
        },
        {
            name: 'TheDailyHacker',
            live: 'https://thedailyhacker.vercel.app/',
            github: 'https://github.com/faizshaikh17/thedailyhacker',
            technologies: ['React', 'Javascript', 'Tailwind CSS', 'Grok Ai'],
            image: '/3.gif',
            description: 'TheDailyHacker is a sleek and intuitive UI reimagination of Hacker News, designed to immerse users in the dynamic world of technology. It curates and showcases a diverse array of stories, discussions, and insights, delving deep into the latest trends, innovations, and ideas shaping the tech landscape. With a user-friendly interface, TheDailyHacker delivers a seamless and engaging experience for tech enthusiasts, developers, and curious minds alike.'
        },
        {
            name: 'Jusblog',
            live: 'https://jusblog.vercel.app/',
            github: 'https://github.com/faizshaikh17/Jusblog',
            technologies: ['React', 'Javascript', 'Redux', 'Tailwind CSS', 'Grok Ai', 'Appwrite'],
            image: '/4.jpg',
            description: 'Jusblog is a minimalist and distraction-free blog platform designed for developers, writers, and anyone looking to share their thoughts and ideas with the world. Leveraging Markdown (via a rich text editor) for content creation, Jusblog offers a clean, easy-to-use interface perfect for personal blogs, technical documentation, or simply sharing your perspectives.'
        },
        // {
        //     name: 'Contact Template',
        //     live: 'https://contactpagetemplate.vercel.app/',
        //     github: 'https://github.com/faizshaikh17/pages',
        //     technologies: ['React', 'Typescript', 'Tailwind CSS'],
        //     image: '/images/contacttemplate.png',
        //     description: 'Simple template landing page for contact section of an MVP.'
        // },

    ]


    return (
        <>
            <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-2'>
                {
                    projectDetails.map((item) => (
                        <a key={item.name} href={item.live} target="_blank" rel="noopener noreferrer">
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
                                className={`flex border h-fit border-neutral-800/50 z-0 rounded-2xl flex-col p-0.5 cursor-grab w-[85vw] sm:w-[13rem]`}
                                style={{ touchAction: 'none' }}
                            >
                                <div
                                    className="border flex h-[7rem] sm:h-[8rem] w-full flex-col gap-4 items-center justify-end p-4 border-neutral-800/50 z-1 rounded-2xl"
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <p className='text-lg mono sm:text-xl font-bold text-center hover:underline hover:text-yellow-500'>
                                        {item.name}
                                    </p>
                                </div>
                            </motion.div>
                        </a>
                    ))
                }
            </div>


        </>

    )
}
