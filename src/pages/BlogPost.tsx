import { useParams, Link } from 'react-router-dom'
import { usePost } from '../hooks/usePosts'
import './BlogPost.css'

function BlogPost() {
  const { id } = useParams<{ id: string }>()
  const { post, loading, error } = usePost(id)

  if (loading) {
    return <div className="blog-post">加载中...</div>
  }

  if (error) {
    return <div className="blog-post">加载失败: {error.message}</div>
  }

  if (!post) {
    return (
      <div className="blog-post not-found">
        <h1>文章未找到</h1>
        <Link to="/">返回首页</Link>
      </div>
    )
  }

  return (
    <div className="blog-post">
      <Link to="/" className="back-link">← 返回首页</Link>
      <article>
        <header className="post-header">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="post-date">{post.date}</span>
            <span className="post-reading-time">{post.readingTime} 分钟阅读</span>
          </div>
          <div className="post-tags">
            {post.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </header>
        <div 
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}

export default BlogPost
