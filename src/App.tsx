import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import './App.css'

// 获取基础路径
const basePath = import.meta.env.VITE_BASE_PATH || '/blog/'

function App() {
  return (
    <Router basename={basePath.replace(/\/$/, '')}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post/:id" element={<BlogPost />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
