import './App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Vans } from './Vans'

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <header className="header">
          <Link to="/" className="link link--logo">
            #VANLIFE
          </Link>
          <nav className="header--nav">
            <Link to="/about" className="link link--nav">
              About
            </Link>
            <Link to="/vans" className="link link--nav">
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
      </div>
    </BrowserRouter>
  )
}

export default App
