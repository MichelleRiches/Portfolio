import { Code2, Palette, Sparkles, Database, Wrench, Gauge, FlaskConical, Monitor, Mail, Users } from 'lucide-react'

import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiBootstrap, SiSass, SiStyledcomponents, SiGit, SiGithub, SiVercel, SiNpm, SiPnpm, SiNodedotjs, SiWebpack, SiVite, SiWordpress } from 'react-icons/si'

export type SkillItem = {
	name: string
	icon?: any
}

type SkillGroup = {
	title: string
	icon: any
	items: SkillItem[]
}

export const skills: SkillGroup[] = [
	{
		title: 'Core Front-End',
		icon: Code2,
		items: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'JavaScript (ES6+)', icon: SiJavascript }, { name: 'TypeScript', icon: SiTypescript }, { name: 'React', icon: SiReact }, { name: 'Next.js', icon: SiNextdotjs }, { name: 'Responsive Design' }, { name: 'Accessibility (WCAG)' }, { name: 'Semantic HTML' }, { name: 'Tailwind CSS', icon: SiTailwindcss }, { name: 'Bootstrap', icon: SiBootstrap }, { name: 'Sass/SCSS', icon: SiSass }]
	},
	{
		title: 'Development Environment',
		icon: Monitor,
		items: [{ name: 'Visual Studio Code' }, { name: 'Visual Studio' }, { name: 'Postman' }, { name: 'Chrome DevTools' }, { name: 'Claude Code' }, { name: 'Figma' }, { name: 'Photoshop' }, { name: 'Git', icon: SiGit }, { name: 'GitHub', icon: SiGithub }]
	},
	{
		title: 'Interaction & Animation',
		icon: Sparkles,
		items: [{ name: 'CSS Animations' }, { name: 'Framer Motion' }, { name: 'GSAP' }, { name: 'SVG Animation' }]
	},
	{
		title: 'CMS & Content Platforms',
		icon: Database,
		items: [{ name: 'Umbraco' }, { name: 'Razor Syntax (cshtml)' }, { name: 'Headless CMS' }, { name: 'Content Delivery APIs' }, { name: 'WordPress', icon: SiWordpress }]
	},
	{
		title: 'Tooling & Build Systems',
		icon: Wrench,
		items: [{ name: 'Vercel', icon: SiVercel }, { name: 'Gulp' }, { name: 'npm', icon: SiNpm }, { name: 'pnpm', icon: SiPnpm }, { name: 'ESLint' }, { name: 'Prettier' }]
	},
	{
		title: 'Performance & Accessibility',
		icon: Gauge,
		items: [{ name: 'Lighthouse' }, { name: 'WCAG Compliance' }, { name: 'Core Web Vitals' }, { name: 'Accessibility Auditing' }, { name: 'Performance Optimization' }]
	},
	{
		title: 'Testing & Quality Assurance',
		icon: FlaskConical,
		items: [{ name: 'BrowserStack' }, { name: 'Cross-Browser Testing' }, { name: 'Cross-Device Testing' }, { name: 'Responsive Testing' }, { name: 'Debugging & Troubleshooting' }]
	},
	{
		title: 'Email Development',
		icon: Mail,
		items: [{ name: 'HTML Email' }, { name: 'Responsive Email Design' }, { name: 'Cross-Client Compatibility (Outlook, Gmail, Apple Mail)' }, { name: 'Email Accessibility' }, { name: 'Mailchimp / Email Campaigns' }]
	},
	{
		title: 'Leadership & Collaboration',
		icon: Users,
		items: [{ name: 'Acted as Head of Front-End (Maternity Cover)' }, { name: 'Mentoring Junior Developers' }, { name: 'Code Reviews' }, { name: 'Cross-Functional Collaboration' }, { name: 'Design Reviews' }]
	}
]
