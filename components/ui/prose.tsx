import React from 'react'
import { cn } from '@/lib/utils'

type ProseProps = React.HTMLAttributes<HTMLDivElement> & {
	children: React.ReactNode
}

export function Prose({ children, className, ...props }: ProseProps) {
	return (
		<div className={cn('prose max-w-none', className)} {...props}>
			{children}
		</div>
	)
}
