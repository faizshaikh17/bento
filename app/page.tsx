import HeroWrapper from './ui/components/HeroWrapper'
import SkillsWrapper from './ui/components/SkillsWrapper'
import LinksWrapper from './ui/components/LinksWrapper'
import ProjectsWrapper from './ui/components/ProjectsWrapper'

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row md:justify-center flex-wrap min-h-screen text-white bg-[#181717] w-full z-0 relative gap-2 p-4">
      <div className='absolute inset-0 z-0'
        style={{
          backgroundImage:
            `linear-gradient(to right, #181717 1px, transparent 1px),
          linear-gradient(to bottom, #181717 1px, transparent 1px)`,
          backgroundSize: '5px 5px'
        }} />
      <SkillsWrapper />
      <div className="flex flex-col gap-2 w-full md:w-auto">
        <HeroWrapper />
        <div className="flex flex-col sm:flex-row justify-between gap-2 w-full max-w-[34rem]">
          <ProjectsWrapper />
          <LinksWrapper />
        </div>
      </div>
    </div>
  )
}
