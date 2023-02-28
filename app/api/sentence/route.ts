import { NextResponse } from 'next/server'

function sleep(time: number) {
	return new Promise(resolve => {
		setTimeout(resolve, time)
	})
}

export async function GET(request: Request) {
	// const res = await fetch('https://api.apiopen.top/api/sentences')
	// const data = await res.json()

	// 延迟返回，测试注水
	await sleep(3000)
	await sleep(3000)
	await sleep(3000)

	// return NextResponse.json(data)
	return NextResponse.json({
		code: 200,
		message: '成功!',
		result: {
			name: '海棠未雨，梨花先雪，一半春休。',
			from: '王雱《眼儿媚·杨柳丝丝弄轻柔》',
		},
	})
}
