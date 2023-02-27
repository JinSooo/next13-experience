import Link from 'next/link'
import React from 'react'
import ErrorButton from '../ErrorButton'
import TestButton from '../TestButton'
import ThemeButton from '../ThemeButton'

export default function RootHeader() {
	return (
		<div className="tabs tabs-boxed pt-2 pl-5 pr-10 justify-end items-baseline">
			<ErrorButton />
			<TestButton />
			<Link href={'/'} className="tab tab-lg focus:tab-active">
				Home
			</Link>
			<Link href={'/doc'} className="tab tab-lg focus:tab-active">
				Docs
			</Link>
			<Link href={'/info'} className="tab tab-lg focus:tab-active">
				Info
			</Link>
			<ThemeButton />
		</div>
	)
}
