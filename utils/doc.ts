import { DocPath } from './../types/index'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const docsPath = path.join(process.cwd(), 'docs')

/**
 * 将文件路径转变成对象
 * @param route 路径
 */
const convertDir = (route: string): DocPath[] => {
	const pathDir = fs.readdirSync(route)

	return pathDir.map((doc: string) => {
		if (doc.includes('.md')) {
			return {
				id: doc.replace(/\.md$/, ''),
			}
		} else {
			return {
				id: doc,
				children: convertDir(path.join(docsPath, doc)),
			}
		}
	})
}

export const getDocsDir = () => convertDir(docsPath)

/**
 * 获取对应的md文件，并转换为html样式
 * @param id
 * @returns
 */
export const getDoc = async (ids: string[]) => {
	let docPath = docsPath
	// 遍历解析doc路径
	ids.forEach((id, index) => {
		// 浏览器解析后在改回
		id = decodeURI(id)
		if (index === ids.length - 1) docPath = path.join(docPath, `${id}.md`)
		else docPath = path.join(docPath, id)
	})
	const data = fs.readFileSync(docPath)

	// 将数据和内容分开解析
	const result = matter(data)
	// 解析md并转换为html
	const processContent = await remark().use(html).process(result.content)
	// 渲染完成
	const contentRender = processContent.toString()

	return {
		id: docPath,
		contentRender,
		...result.data,
	}
}

/**
 * 将含children的文件路径转变为数组
 * @param route 连接路径
 * @param dir 路径对象
 */
const convertDirChildren = (route: string[], dir: DocPath[]): string[] => {
	return dir.map((nav): any => {
		if (!nav.children) return [...route, nav.id]
		return convertDirChildren([...route, nav.id], nav.children)
	})
}

/**
 * 将文件路径转变成对象
 * @param route 路径
 */
const convertSlug = (dir: DocPath[]) => {
	const arr = dir.map(nav => {
		if (!nav.children) return [nav.id]
		return convertDirChildren([nav.id], nav.children)
	})

	return arr.flat()
}

export const getDocsSlug = () => {
	const docsDir = getDocsDir()

	return convertSlug(docsDir)
}
