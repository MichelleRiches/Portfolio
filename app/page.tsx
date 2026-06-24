import { Header } from '@/components/layout/header'
import { IntroSection } from '@/components/layout/content/introSection'
import { SkillsSection } from '@/components/layout/content/skillsSection'
import { ProjectsSection } from '@/components/layout/content/projectsSection'
import { AboutSection } from '@/components/layout/content/aboutSection'
import { Footer } from '@/components/layout/footer'

const DEBUG = false

export default function Home() {
	return (
		<>
			<Header />
			<main className="space-y-20">
				<IntroSection />
				<SkillsSection />
				<ProjectsSection />
				<AboutSection />
			</main>
			<Footer />
		</>
	)
}
