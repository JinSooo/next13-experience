import { NextResponse } from 'next/server'

function sleep(time: number) {
	return new Promise(resolve => {
		setTimeout(resolve, time)
	})
}

export async function GET(request: Request) {
	const res = await fetch('https://api.apiopen.top/api/sentences')
	const data = await res.json()

	// 延迟返回，测试注水
	await sleep(3000)
	await sleep(3000)
	await sleep(3000)

	return NextResponse.json(data)
}
