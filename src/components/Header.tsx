import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          我的博客
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">首页</Link>
          <Link to="/about" className="nav-link">关于</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
