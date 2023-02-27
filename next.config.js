/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	async redirects() {
		return [
			{
				source: '/doc',
				destination: '/doc/intro/introduction',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
