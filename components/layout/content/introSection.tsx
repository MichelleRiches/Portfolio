import { Prose } from '@/components/ui/prose'

export const IntroSection = () => {
	return (
		<section id="intro">
			<div className="container">
				<Prose className="md:text-center! flex flex-col md:items-center">
					<h1>Hi, I'm Michelle!</h1>
					<p>I am a Front End Developer based in Cheshire with over 20 years of industry experience.</p>
					<p>I possess a strong foundation in modern web development and am committed to continuous growth, refining my skills and staying current with industry best practices.</p>
				</Prose>
			</div>
		</section>
	)
}
