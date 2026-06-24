'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { Prose } from '@/components/ui/prose'
import { Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemTitle } from '@/components/ui/item'

import { projects } from '@/data/projects'

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

export const ProjectsSection = () => {
	const { resolvedTheme } = useTheme()
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		setIsDark(resolvedTheme === 'dark')
	}, [resolvedTheme])

	const palette = isDark ? HOVER_COLOURS.dark : HOVER_COLOURS.light

	return (
		<section id="projects">
			<div className="container">
				<Prose>
					<h2>Projects</h2>
					<p>Here are some of the projects I've worked on. Each one represents a unique challenge and an opportunity to grow as a developer.</p>
				</Prose>

				<motion.div
					className="mt-10"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{
						once: true,
						margin: '0px 0px -25% 0px'
					}}
				>
					<ItemGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{projects.map((project, index) => {
							const hoverColour = palette[index % palette.length]
							const hasBothLinks = project.live && project.github

							return (
								<motion.div
									tabIndex={-1}
									key={project.name}
									variants={item}
									animate={{ backgroundColor: 'var(--card)' }}
									whileHover={{
										y: -6,
										backgroundColor: hoverColour,
										transition: {
											type: 'tween' as const,
											ease: 'easeOut' as const,
											duration: 0.15
										}
									}}
									whileTap={{ y: -2 }}
									className="relative group h-full rounded-md will-change-transform bg-card border border-border hover:border-white dark:hover:border-black focus-within-outline"
								>
									<Item variant="outline" className="h-full bg-transparent pointer-events-none border-0">
										<ItemHeader>
											<Image src={project.image} alt={project.name} width={600} height={338} className="w-full rounded-sm object-cover" />
										</ItemHeader>

										<ItemContent className="gap-4">
											<ItemTitle className="text-2xl leading-8 font-semibold group-hover:text-black">{project.name}</ItemTitle>

											<ItemDescription className="text-sm group-hover:text-black">{project.description}</ItemDescription>

											<div className="flex flex-wrap gap-2">
												{project.tags.map(tag => (
													<span key={tag} className="rounded-full border bg-background px-2 py-0.5 text-sm text-muted-foreground dark:group-hover:text-black group-hover:border-white dark:group-hover:bg-white">
														{tag}
													</span>
												))}
											</div>

											{(project.live || project.github) && (
												<div className="flex gap-3 pointer-events-auto">
													{project.live && (
														<Link href={project.live} target="_blank" className={cn('text-sm underline underline-offset-4 hover:no-underline dark:group-hover:text-black', !hasBothLinks && 'after:absolute after:inset-0 outline-none')}>
															View live site
														</Link>
													)}

													{project.github && (
														<Link href={project.github} target="_blank" className={cn('text-sm underline underline-offset-4 hover:no-underline dark:group-hover:text-black', !hasBothLinks && 'after:absolute after:inset-0 outline-none')}>
															View on GitHub
														</Link>
													)}
												</div>
											)}
										</ItemContent>
									</Item>
								</motion.div>
							)
						})}
					</ItemGroup>
				</motion.div>
			</div>
		</section>
	)
}
