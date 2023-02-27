import { Suspense, use } from 'react'
import Loading from '@/components/Loading'
import Skeleton from '@/components/Skeleton'

export default function Page() {
	return (
		<div>
			<header className="flex justify-center items-center flex-col">
				<h1 className="text-3xl">Hello there, this is a page for testing streaming about React Server Component</h1>
				<p>You will directly see the above content. And meanwhile you will wait for the below content through hydrating</p>
			</header>
			<div className="flex justify-center items-center flex-col mt-10 space-y-2">
				<p>a data need some time to fetch successfully 👇👇👇</p>
				<Suspense
					fallback={
						// <>
						// 	<Loading />
						// 	<p>Loading Data...</p>
						// </>
						<>
							<Skeleton />
							<Skeleton />
							<Skeleton />
						</>
					}
				>
					{/* @ts-expect-error Async Server Component */}
					<TestData />
				</Suspense>
			</div>
		</div>
	)
}

async function getData() {
	const res = await fetch('http://localhost:3000/api/sentence', {
		// 用于测试注水
		cache: 'no-store',
	})
	return res.json()
}

async function TestData() {
	const data = await getData()

	return (
		<p>
			{data.result.name}---{data.result.from}
		</p>
	)
}
