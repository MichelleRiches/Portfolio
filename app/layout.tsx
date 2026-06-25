import type { Metadata } from 'next'
import { Archivo_Black, Inter, Boogaloo } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/providers/themeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const boogaloo = Boogaloo({
	variable: '--font-boogaloo',
	subsets: ['latin'],
	weight: '400'
})

export const metadata: Metadata = {
	title: 'Michelle Riches Portfolio',
	description: 'Portfolio website'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={cn('h-full antialiased scroll-smooth', boogaloo.variable, 'font-sans', inter.variable)} suppressHydrationWarning>
			<body className="min-h-full flex flex-col">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
