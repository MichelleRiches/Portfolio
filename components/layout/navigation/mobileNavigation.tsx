import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { NavigationLinks } from './navigationLinks'
import { ThemeToggle } from '@/components/ui/themeToggle'

export const MobileNavigation = () => {
	return (
		<Sheet>
			<div className="flex justify-end">
				<SheetTrigger asChild>
					<Button variant="outline">
						<Menu className="size-4" />
					</Button>
				</SheetTrigger>
			</div>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="text-2xl">Menu</SheetTitle>
				</SheetHeader>
				<div className="flex flex-col gap-4 px-4">
					{NavigationLinks.map(link => (
						<SheetClose key={link.href} asChild>
							<Link href={link.href}>{link.label}</Link>
						</SheetClose>
					))}
					<ThemeToggle />
				</div>
			</SheetContent>
		</Sheet>
	)
}
