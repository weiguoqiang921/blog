import { marked } from 'marked'

export interface Post {
  id: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  readingTime: number
}

// Markdown 文章元数据接口
interface PostMeta {
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: number
}

// 使用 Vite 的 import.meta.glob 获取所有 markdown 文件
const postModules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' })

/**
 * 解析 markdown 文件的 frontmatter
 */
function parseFrontmatter(content: string): { meta: PostMeta; body: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)
  
  if (!match) {
    throw new Error('Invalid markdown format: missing frontmatter')
  }
  
  const frontmatterStr = match[1]
  const body = match[2]
  
  // 简单解析 YAML frontmatter
  const meta: Record<string, any> = {}
  const lines = frontmatterStr.split('\n')
  let currentKey = ''
  
  for (const line of lines) {
    const keyMatch = line.match(/^(\w+):\s*(.*)$/)
    if (keyMatch) {
      currentKey = keyMatch[1]
      const value = keyMatch[2].trim()
      
      // 处理数组（以 - 开头的多行）
      if (value === '') {
        meta[currentKey] = []
      } else {
        meta[currentKey] = value
      }
    } else if (line.startsWith('  - ')) {
      // 数组项
      if (Array.isArray(meta[currentKey])) {
        meta[currentKey].push(line.slice(4).trim())
      }
    }
  }
  
  return {
    meta: meta as unknown as PostMeta,
    body
  }
}

/**
 * 获取所有文章
 */
export async function getAllPosts(): Promise<Post[]> {
  const posts: Post[] = []
  
  for (const [path, loader] of Object.entries(postModules)) {
    const content = await loader() as string
    const { meta, body } = parseFrontmatter(content)
    
    // 从文件路径提取 ID
    const id = path.match(/\/([^/]+)\.md$/)?.[1] || ''
    
    posts.push({
      id,
      title: meta.title,
      date: meta.date,
      excerpt: meta.excerpt,
      content: await marked(body),
      tags: meta.tags,
      readingTime: meta.readingTime
    })
  }
  
  // 按日期排序（最新在前）
  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

/**
 * 根据 ID 获取单篇文章
 */
export async function getPostById(id: string): Promise<Post | undefined> {
  const posts = await getAllPosts()
  return posts.find(post => post.id === id)
}
