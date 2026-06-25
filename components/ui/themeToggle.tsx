// components/ui/themeToggle.tsx
'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const toggleTheme = () => {
		setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
	}

	// Render a placeholder with the same dimensions to avoid layout shift
	if (!mounted) {
		return (
			<Button variant="outline" size="icon" aria-label="Toggle theme" disabled>
				<Sun className="size-5" aria-hidden="true" />
			</Button>
		)
	}

	const isDark = resolvedTheme === 'dark'

	return (
		<Button variant="outline" size="icon" className="bg-primary border-primary text-primary-foreground rounded-full bg-clip-border cursor-pointer" onClick={toggleTheme} aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'} title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}>
			{isDark ? <Sun className="size-5" aria-hidden="true" /> : <Moon className="size-5" aria-hidden="true" />}
		</Button>
	)
}
