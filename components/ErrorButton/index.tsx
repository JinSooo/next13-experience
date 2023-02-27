'use client'

export default function ErrorButton() {
	const handleClick = () => {
		throw new Error('Oh no! Something went wrong.')
	}

	return (
		<button className="btn btn-primary btn-sm" onClick={handleClick}>
			ErrorButton
		</button>
	)
}
