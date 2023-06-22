import './App.css'
import Navbar from '../src/components/Navbar'
import Home from './components/Home'

function App() {

  return (
    <>
      <Navbar position="static" className="navbar" />
      <Home/>
    </>
  )
}

export default App
