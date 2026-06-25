type TagListItem = {
	name: string
	icon?: any
}

type TagListProps = {
	items: TagListItem[]
}

export function TagList({ items }: TagListProps) {
	return (
		<ul className="not-prose flex flex-wrap gap-2">
			{items.map(item => {
				const Icon = item.icon

				return (
					<li key={item.name} className="flex items-center gap-1 rounded-full border px-3 py-1 text-sm font-semibold text-muted-foreground group-hover:text-black group-hover:border-black/80">
						{Icon && <Icon className="h-3.5 w-3.5 opacity-70" />}
						{item.name}
					</li>
				)
			})}
		</ul>
	)
}
