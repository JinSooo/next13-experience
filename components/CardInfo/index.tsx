interface Props {
	title: string
	desc?: string
	onClick?: () => void
}

export default function CardInfo({ title, desc, onClick }: Props) {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{desc}</p>
				<div className="card-actions justify-end">
					<button onClick={onClick} className="btn btn-primary">
						Try Now
					</button>
				</div>
			</div>
		</div>
	)
}
