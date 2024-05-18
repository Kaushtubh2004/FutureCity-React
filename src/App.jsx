import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import { BrowserRouter as Router,Routes , Route} from 'react-router-dom'
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Loading from './components/Loading';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
function App() {
  

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 3500)


  return (
    <>
    {loading ? <Loading /> :
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </Router>
}
    </>
  )
}

export default App
