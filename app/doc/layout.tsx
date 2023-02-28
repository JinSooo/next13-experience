import DocsMenu from '@/components/DocsMenu'
import { getDocsDir } from '@/utils/doc'

export const metadata = {
	title: 'Docs',
}

export default async function Layout({ children }: { children: React.ReactNode }) {
	const docsPath = await getDocsDir()

	return (
		<div className="flex" style={{ height: `calc(100vh - 60px)` }}>
			<DocsMenu docsPath={docsPath} />

			<div className="flex-1">{children}</div>
		</div>
	)
}
