import RootHeader from '@/components/RootHeader'
import './globals.css'

export const metadata = {
	title: 'Next13 Experience',
	description: 'something interesting about next13',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

	return (
		<html lang="en">
			<body data-theme="dark">
				<RootHeader />
				<div style={{ height: `calc(100vh - 60px)` }}>{children}</div>
			</body>
		</html>
	)
}
