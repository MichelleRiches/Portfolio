'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { NavigationLinks } from './navigationLinks'
import { ThemeToggle } from '@/components/ui/themeToggle'

const HOVER_COLOURS = {
	light: ['rgba(233, 176, 0, 0.3)', 'rgba(232, 110, 128, 0.3)', 'rgba(0, 143, 149, 0.3)', 'rgba(226, 78, 66, 0.3)'],
	dark: ['rgba(233, 176, 0, 1)', 'rgba(232, 110, 128, 1)', 'rgba(0, 143, 149, 1)', 'rgba(226, 78, 66, 1)']
}

export const DesktopNavigation = () => {
	const { resolvedTheme } = useTheme()
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		setIsDark(resolvedTheme === 'dark')
	}, [resolvedTheme])

	const palette = isDark ? HOVER_COLOURS.dark : HOVER_COLOURS.light

	return (
		<div className="flex items-center justify-end gap-2.5">
			<NavigationMenu>
				<NavigationMenuList>
					{NavigationLinks.map((link, index) => (
						<NavigationMenuItem key={link.href}>
							<NavigationMenuLink asChild className="font-semibold hover:bg-(--nav-hover-colour) focus:bg-(--nav-hover-colour) dark:hover:text-black" style={{ '--nav-hover-colour': palette[index % palette.length] } as React.CSSProperties}>
								<Link href={link.href}>{link.label}</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
			<ThemeToggle />
		</div>
	)
}
