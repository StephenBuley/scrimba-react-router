import './App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Vans } from './pages/Vans'

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Link to="/" className="link--logo">
          #VANLIFE
        </Link>
        <nav className="header--nav">
          <Link to="/about" className="link--nav">
            About
          </Link>
          <Link to="/vans" className="link--nav">
            Vans
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <footer className="footer">
        <p className="footer--text">Ⓒ 2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
