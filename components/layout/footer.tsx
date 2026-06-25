import Link from 'next/link'

export const Footer = () => {
	return (
		<footer className="mt-20 py-5">
			<div className="container">
				<div className="flex gap-4 justify-end">
					<Link href="https://uk.linkedin.com/in/michelle-riches-9670aa1a" target="_blank" className="text-sm underline underline-offset-4 hover:no-underline focus-outline">
						Linkedin
					</Link>
					<Link href="https://github.com/MichelleRiches" target="_blank" className="text-sm underline underline-offset-4 hover:no-underline focus-outline">
						GitHub
					</Link>
				</div>
			</div>
		</footer>
	)
}
