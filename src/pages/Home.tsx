import { Link } from 'react-router-dom'
import { usePosts } from '../hooks/usePosts'
import './Home.css'

function Home() {
  const { posts, loading, error } = usePosts()

  if (loading) {
    return <div className="home">加载中...</div>
  }

  if (error) {
    return <div className="home">加载失败: {error.message}</div>
  }

  return (
    <div className="home">
      <section className="hero">
        <h1>欢迎来到我的博客</h1>
        <p>分享技术、生活与思考</p>
      </section>
      
      <section className="posts">
        <h2>最新文章</h2>
        <div className="post-list">
          {posts.map(post => (
            <article key={post.id} className="post-card">
              <Link to={`/post/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <p className="post-date">{post.date}</p>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
