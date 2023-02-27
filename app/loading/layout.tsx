import { fetchCategories } from '@/utils/category'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export const metadata = {
	title: 'Loading',
}

export default async function Layout({ children }: { children: React.ReactNode }) {
	const categories = await fetchCategories()
	if (!categories) notFound()

	return (
		<div className="space-y-9">
			<div className="flex justify-between">
				{categories.map(category => (
					<Link
						href={`/loading/${category.slug}`}
						className={'rounded-lg px-3 py-1 text-sm font-medium bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white'}
						key={category.slug}
					>
						{category.name}
					</Link>
				))}
			</div>

			<div>{children}</div>
		</div>
	)
}
