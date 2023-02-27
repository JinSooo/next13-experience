import { NextResponse } from 'next/server'

function sleep(time: number) {
	return new Promise(resolve => {
		setTimeout(resolve, time)
	})
}

export async function GET(request: Request) {
	// 延迟返回，测试注水
	await sleep(3000)

	return NextResponse.json({ msg: 'delay' })
}
