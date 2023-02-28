'use client'

import { DocPath } from '@/types'
import React, { Fragment } from 'react'
import { useRouter } from 'next/navigation'
import TestButton from '../TestButton'

export default function DocsMenu({ docsPath = [] }: { docsPath: DocPath[] }) {
	const router = useRouter()

	const to = (route: string) => {
		router.push(route)
	}

	return (
		<ul className="menu bg-base-100 w-56 p-2 rounded-box">
			{docsPath.map(doc => (
				<Fragment key={doc.id}>
					<li className="menu-title">
						<span>{doc.id}</span>
					</li>
					{doc.children!.map(subDoc => (
						<li key={subDoc.id} onClick={() => to(`/doc/${doc.id}/${subDoc.id}`)}>
							<span>{subDoc.id}</span>
						</li>
					))}
				</Fragment>
			))}
			<TestButton />
		</ul>
	)
}
