import RootHeader from '@/components/RootHeader'
import './globals.css'

export const metadata = {
	title: 'Next13 Experience',
	description: 'something interesting about next13',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<RootHeader />
				{children}
			</body>
		</html>
	)
}
