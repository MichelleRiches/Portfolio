'use client'

import { DesktopNavigation } from '@/components/layout/navigation/desktopNavigation'
import { MobileNavigation } from '@/components/layout/navigation/mobileNavigation'
import { useMediaQuery } from '@/hooks/use-media-query'

const DEBUG = false

export const Header = () => {
	const isMobile = useMediaQuery('(max-width: 768px)')

	return (
		<header className="sticky top-0 bg-background z-10 py-3 mb-10 md:mb-20">
			<div className="container">{isMobile ? <MobileNavigation /> : <DesktopNavigation />}</div>
		</header>
	)
}
