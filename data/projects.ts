export type Project = {
	name: string
	description: string
	image: string
	tags: string[]
	live?: string
	github?: string
}

export const projects: Project[] = [
	{
		name: 'Lloyds',
		description: "I led the front-end build, including the development of all GSAP animations. The project was built using Bootstrap, with HTML integrated into Umbraco partial and view files using Razor syntax. The homepage's horizontally scrolling hero section was a particularly enjoyable challenge. Working from a creative reference provided by the lead designer, I developed a custom implementation tailored to the project's design system and user experience requirements.",
		image: 'https://res.cloudinary.com/dcjf1g82f/image/upload/f_auto/q_auto/v1782377166/lloyds_aelacg.jpg',
		tags: ['Sass/SCSS', 'JavaScript', 'HTML5', 'Bootstrap', 'Umbraco', 'Razor Syntax', 'GSAP', 'npm', 'Gulp', 'Git', 'GitHub', 'Figma'],
		live: 'https://www.lloydsbankinggrouptalent.com/'
	},
	{
		name: 'Uber',
		description: 'I contributed to this project, which was built using React and Next.js and integrated with a headless Umbraco CMS via API endpoints. Tailwind CSS was used for styling, while Framer Motion was used to create animations.',
		image: 'https://res.cloudinary.com/dcjf1g82f/image/upload/f_auto/q_auto/v1782377167/uber_aimimq.jpg',
		tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Git', 'GitHub', 'Umbraco', 'Headless CMS', 'Content Delivery API', 'pnpm', 'Figma'],
		live: 'https://jobs.uber.com/en/'
	},
	{
		name: 'Salesforce',
		description: 'As one of two Front-End Developers on the project, I helped deliver the build using Bootstrap, with HTML integrated into Umbraco partial and view files using Razor syntax.',
		image: 'https://res.cloudinary.com/dcjf1g82f/image/upload/f_auto/q_auto/v1782377167/salesforce_cbovn0.jpg',
		tags: ['Sass/SCSS', 'JavaScript', 'HTML5', 'Bootstrap', 'Umbraco', 'Razor Syntax', 'GSAP', 'npm', 'Gulp', 'Git', 'GitHub', 'Figma'],
		live: 'https://www.salesforce.com/company/careers/'
	},
	{
		name: 'Dominos',
		description: 'I led the front-end build, using Bootstrap for the UI and integrating the HTML into Umbraco partial and view files with Razor syntax. Subtle, performance-focused animations were created using the Intersection Observer API and CSS animations.',
		image: 'https://res.cloudinary.com/dcjf1g82f/image/upload/f_auto/q_auto/v1782377166/dominos_u4iupb.jpg',
		tags: ['Sass/SCSS', 'JavaScript', 'HTML5', 'Bootstrap', 'Umbraco', 'Razor Syntax', 'npm', 'Gulp', 'Git', 'GitHub', 'Figma'],
		live: 'https://jobs.dominos.com/us/'
	},
	{
		name: 'Criteo',
		description: 'I led the front-end build, using Bootstrap for the UI and integrating the HTML into Umbraco partial and view files with Razor syntax. I independently developed the animation-heavy homepage experience, leveraging GSAP to create complex, interactive animation sequences and transitions.',
		image: 'https://res.cloudinary.com/dcjf1g82f/image/upload/f_auto/q_auto/v1782377167/criteo_hj8cv2.jpg',
		tags: ['Sass/SCSS', 'JavaScript', 'HTML5', 'Bootstrap', 'Umbraco', 'Razor Syntax', 'GSAP', 'npm', 'Gulp', 'Git', 'GitHub', 'Figma'],
		live: 'https://careers.criteo.com/en/'
	},
	{
		name: 'Grab',
		description: "I led the front-end build, using Bootstrap for the UI and integrating HTML into Umbraco partial and view files with Razor syntax. I was responsible for implementing the site's animations, leveraging GSAP for complex interactions and the Intersection Observer API for lighter, performance-focused scroll effects.",
		image: 'https://res.cloudinary.com/dcjf1g82f/image/upload/f_auto/q_auto/v1782377166/grab_rwaf40.jpg',
		tags: ['Sass/SCSS', 'JavaScript', 'HTML5', 'Bootstrap', 'Umbraco', 'Razor Syntax', 'GSAP', 'npm', 'Gulp', 'Git', 'GitHub', 'Figma', 'SVG Animation'],
		live: 'https://www.grab.careers/en/'
	},
	{
		name: 'Xero',
		description: 'As one of three Front-End Developers on the project, I contributed to the build using Bootstrap, with HTML integrated into Umbraco partial and view files using Razor syntax. I developed a wide range of interactive animations and motion effects, including parallax scrolling, stacked card effects on scroll, and scroll-based animations to enhance the user experience.',
		image: 'https://res.cloudinary.com/dcjf1g82f/image/upload/f_auto/q_auto/v1782377166/xero_q0rseg.jpg',
		tags: ['Sass/SCSS', 'JavaScript', 'HTML5', 'Bootstrap', 'Umbraco', 'Razor Syntax', 'npm', 'Gulp', 'Git', 'GitHub', 'Figma'],
		live: 'https://careers.xero.com/'
	},
	{
		name: 'Nutanix',
		description: "I led the front-end build, using Bootstrap for the UI and integrating HTML into Umbraco partial and view files with Razor syntax. I was responsible for implementing the site's animations, leveraging GSAP for complex interactions and the Intersection Observer API for lighter, performance-focused scroll effects. I worked closely with the designer to bring the hero heart animation to life, implementing it as an animated SVG.",
		image: 'https://res.cloudinary.com/dcjf1g82f/image/upload/f_auto/q_auto/v1782377166/nutanix_bfctrm.jpg',
		tags: ['Sass/SCSS', 'JavaScript', 'HTML5', 'Bootstrap', 'Umbraco', 'Razor Syntax', 'GSAP', 'npm', 'Gulp', 'Git', 'GitHub', 'SVG Animation', 'Figma'],
		live: 'https://careers.nutanix.com/en/'
	},
	{
		name: 'Canva',
		description: 'As one of three Front-End Developers on the project, I helped deliver the build using Bootstrap, with HTML integrated into Umbraco partial and view files using Razor syntax.',
		image: 'https://res.cloudinary.com/dcjf1g82f/image/upload/f_auto/q_auto/v1782377167/canva_kx45w0.jpg',
		tags: ['Sass/SCSS', 'JavaScript', 'HTML5', 'Bootstrap', 'Umbraco', 'Razor Syntax', 'GSAP', 'npm', 'Gulp', 'Git', 'GitHub', 'Figma'],
		live: 'https://www.lifeatcanva.com/en/'
	},
	{
		name: 'Verizon',
		description: "I led the front-end build of this project, which was built using React and Next.js and integrated with a headless Umbraco CMS via API endpoints. Tailwind CSS was used for styling. The project called for careful attention to detail to ensure compliance with the client's strict design system, including rigid spacing rules, typography scales, and component styling.",
		image: 'https://res.cloudinary.com/dcjf1g82f/image/upload/f_auto/q_auto/v1782377167/verizon_z6b1pn.jpg',
		tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Git', 'GitHub', 'Umbraco', 'Headless CMS', 'Content Delivery API', 'pnpm', 'Figma'],
		live: 'https://mycareer.verizon.com/'
	},
	{
		name: 'Box',
		description: 'As one of two Front-End Developers on the project, I helped deliver the build using Bootstrap, with HTML integrated into Umbraco partial and view files using Razor syntax. Animations were intentionally subtle, with the Intersection Observer API used to create lightweight, performance-focused scroll effects that enhanced the user experience without compromising performance.',
		image: 'https://res.cloudinary.com/dcjf1g82f/image/upload/f_auto/q_auto/v1782377166/box_zfjmqs.jpg',
		tags: ['Sass/SCSS', 'JavaScript', 'HTML5', 'Bootstrap', 'Umbraco', 'Razor Syntax', 'npm', 'Gulp', 'Git', 'GitHub', 'Figma'],
		live: 'https://careers.box.com/en/'
	}
]
