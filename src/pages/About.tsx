import './About.css'

function About() {
  return (
    <div className="about">
      <h1>关于我</h1>
      <section className="about-section">
        <h2>👋 你好！</h2>
        <p>
          欢迎来到我的博客。我是一名热爱技术的开发者，喜欢分享和记录学习的过程。
        </p>
      </section>
      
      <section className="about-section">
        <h2>💻 技术栈</h2>
        <ul>
          <li>前端：React, Vue, TypeScript</li>
          <li>后端：Node.js, Python</li>
          <li>其他：Git, Docker, Linux</li>
        </ul>
      </section>
      
      <section className="about-section">
        <h2>📝 这个博客</h2>
        <p>
          这个博客使用 React + TypeScript + Vite 构建，部署在 GitHub Pages 上。
          主要用来分享技术文章、学习笔记和个人思考。
        </p>
      </section>
      
      <section className="about-section">
        <h2>📬 联系方式</h2>
        <ul>
          <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">@yourusername</a></li>
          <li>Email: your.email@example.com</li>
        </ul>
      </section>
    </div>
  )
}

export default About
