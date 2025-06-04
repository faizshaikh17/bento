import HeroWrapper from './ui/components/HeroWrapper'
import SkillsWrapper from './ui/components/SkillsWrapper'
export default function Home() {
  return (
    <div className="flex justify-center gap-6 p-6">
      <SkillsWrapper />
      <HeroWrapper />
    </div>
  )
}
