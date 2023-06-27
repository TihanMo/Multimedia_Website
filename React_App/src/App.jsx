import './App.css'
import Navbar from '../src/components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <Home/>
    </div>
  )
}

export default App;
