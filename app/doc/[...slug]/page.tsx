import { getDoc, getDocsSlug } from '@/utils/doc'

// 限制只有generateStaticParams下的slug才能访问

// 会限制 loading.tsx 的展示
/* export const dynamicParams = false

export async function generateStaticParams() {
	const docs = await getDocsSlug()

	return docs.map(doc => ({
		slug: doc,
	}))
} */

interface Props {
	params: {
		slug: string[]
	}
}

async function getData(slug: string[]) {
	await new Promise((res, rej) => setTimeout(res, 3000))

	return await getDoc(slug)
}

export default async function Page({ params }: Props) {
	const doc = (await getData(params.slug)) as any
	// const doc = (await getDoc(params.slug)) as any

	return (
		<div className="flex flex-col gap-4 m-10">
			<header>
				<h1 className="font-medium text-3xl my-2">{doc.title}</h1>
				<p className="mb-5">{doc.date}</p>
			</header>
			<article className="prose" dangerouslySetInnerHTML={{ __html: doc.contentRender }} />
		</div>
	)
}
