import SkeletonCard from '@/components/SkeletonCard'

export default function Loading() {
	return (
		<div className="grid grid-cols-4 gap-4 m-4">
			<SkeletonCard />
			<SkeletonCard />
			<SkeletonCard />
			<SkeletonCard />
		</div>
	)
}
