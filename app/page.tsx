import HeroWrapper from './ui/components/HeroWrapper'
import SkillsWrapper from './ui/components/SkillsWrapper'
import LinksWrapper from './ui/components/LinksWrapper'
import ProjectsWrapper from './ui/components/ProjectsWrapper'

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row md:justify-center flex-wrap gap-6 p-4">
      <SkillsWrapper />
      <div className="flex flex-col gap-6 w-full md:w-auto">
        <HeroWrapper />
        <div className="flex flex-col sm:flex-row justify-between gap-6 w-full max-w-[35rem]">
          <ProjectsWrapper />
          <LinksWrapper />
        </div>
      </div>
    </div>
  )
}
