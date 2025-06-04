import HeroWrapper from './ui/components/HeroWrapper'
import SkillsWrapper from './ui/components/SkillsWrapper'
import LinksWrapper from './ui/components/LinksWrapper'
import ProjectsWrapper from './ui/components/ProjectsWrapper'

export default function Home() {
  return (
    <div className="flex justify-center gap-6 p-6">
      <SkillsWrapper />
      <div className='flex flex-col gap-6'>
        <HeroWrapper />
        <div className='flex justify-between gap-6 w-[35rem]'>
          <ProjectsWrapper />
          <LinksWrapper />
        </div>
      </div>
    </div>
  )
}
