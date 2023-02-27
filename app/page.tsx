import CardInfo from '@/components/CardInfo'
import ErrorButton from '@/components/ErrorButton'
import SkeletonCard from '@/components/SkeletonCard'
import Link from 'next/link'

export default function Home() {
	return (
		<div className="hero bg-base-200 h-full">
			<div className="hero-content text-center p-0">
				<div>
					<h1 className="text-5xl font-bold">Hello there</h1>
					<p className="py-6">Next13 Experience</p>
					<button className="btn btn-primary mt-4">
						<Link href={'/doc'}>Get Started</Link>
					</button>
					<div className="flex flex-wrap justify-around gap-4 mt-20">
						<CardInfo title="test1" />
						<CardInfo title="test2" />
						<CardInfo title="test3" />
					</div>
					<ErrorButton />
				</div>
			</div>
		</div>
	)
}
