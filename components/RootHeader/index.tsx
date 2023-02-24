import Link from 'next/link'
import React from 'react'

export default function RootHeader() {
	return (
		<div className="tabs tabs-boxed pt-2 pl-5 pr-10 justify-end">
			<Link href={'/'} className="tab tab-lg focus:tab-active">
				Home
			</Link>
			<Link href={'/docs'} className="tab tab-lg focus:tab-active">
				Docs
			</Link>
			<Link href={'/info'} className="tab tab-lg focus:tab-active">
				Info
			</Link>
		</div>
	)
}
