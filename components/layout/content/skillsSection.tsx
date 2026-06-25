'use client'

import { motion } from 'framer-motion'
import { Prose } from '@/components/ui/prose'
import { skills } from '@/data/skills'
import { TagList } from '@/components/ui/tagList'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const HOVER_COLOURS = {
	light: ['rgba(233, 176, 0, 0.3)', 'rgba(232, 110, 128, 0.3)', 'rgba(0, 143, 149, 0.3)', 'rgba(226, 78, 66, 0.3)'],
	dark: ['rgba(233, 176, 0, 1)', 'rgba(232, 110, 128, 1)', 'rgba(0, 143, 149, 1)', 'rgba(226, 78, 66, 1)']
}

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.25
		}
	}
}

const item = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'tween' as const,
			ease: 'easeOut' as const,
			duration: 0.25
		}
	}
}

const SkillCard = ({ group, index, isDark }: { group: (typeof skills)[number]; index: number; isDark: boolean }) => {
	const Icon = group.icon
	const palette = isDark ? HOVER_COLOURS.dark : HOVER_COLOURS.light
	const hoverColour = palette[index % palette.length]

	return (
		<motion.section
			variants={item}
			tabIndex={-1}
			animate={{ backgroundColor: 'var(--card)' }}
			whileHover={{
				y: -6,
				backgroundColor: hoverColour,
				transition: {
					type: 'tween',
					ease: 'easeOut',
					duration: 0.15
				}
			}}
			whileTap={{ y: -2 }}
			className="group rounded-lg border bg-card p-4 flex flex-col gap-2 hover:border-white dark:hover:border-black will-change-transform focus-outline"
		>
			<div className="mb-3 flex items-center gap-2">
				<Icon className="h-5 w-5 text-muted-foreground group-hover:text-black" />
				<h3 className="text-2xl leading-8 font-semibold dark:group-hover:text-black">{group.title}</h3>
			</div>

			<TagList items={group.items} />
		</motion.section>
	)
}

export const SkillsSection = () => {
	const { resolvedTheme } = useTheme()
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		setIsDark(resolvedTheme === 'dark')
	}, [resolvedTheme])

	return (
		<section id="skills">
			<div className="container">
				<Prose>
					<h2>My Skills</h2>
				</Prose>

				<motion.div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -25% 0px' }}>
					{skills.map((group, index) => (
						<SkillCard key={group.title} group={group} index={index} isDark={isDark} />
					))}
				</motion.div>
			</div>
		</section>
	)
}
