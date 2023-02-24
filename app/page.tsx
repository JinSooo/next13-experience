import CardInfo from '@/components/CardInfo'
import Link from 'next/link'

export default function Home() {
	return (
		<div className="hero bg-base-200" style={{ height: `calc(100vh - 60px)` }}>
			<div className="hero-content text-center p-0">
				<div>
					<h1 className="text-5xl font-bold">Hello there</h1>
					<p className="py-6">Next13 Experience</p>
					<button className="btn btn-primary mt-5">
						<Link href={'/docs'}>Get Started</Link>
					</button>
					<div className="flex flex-wrap justify-around gap-5 mt-20">
						<CardInfo title="test1" />
						<CardInfo title="test2" />
						<CardInfo title="test3" />
					</div>
				</div>
			</div>
		</div>
	)
}
