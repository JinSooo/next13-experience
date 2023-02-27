'use client'

import React, { useState } from 'react'

export default function TestButton() {
	const [count, setCount] = useState(0)

	const handleClick = () => setCount(count + 1)

	return (
		<button className="btn btn-primary btn-sm" onClick={handleClick}>
			{count + ' '}Click
		</button>
	)
}
