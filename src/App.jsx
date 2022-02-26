import Hero from './components/Hero'
import Nav from './components/Nav'
import './App.css'
function App() {
  return (
    <div className="app">
      <header>
        <Nav></Nav>
      </header>
      <Hero></Hero>
    </div>
  )
}

export default App