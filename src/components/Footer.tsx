import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} 我的博客. All rights reserved.</p>
        <p className="footer-tech">
          Built with React + TypeScript + Vite
        </p>
      </div>
    </footer>
  )
}

export default Footer
