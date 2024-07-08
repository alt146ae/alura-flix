import Cabecera from "./components/Cabecera"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import NuevoVideo  from "./pages/NuevoVideo"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"






function App() {

  return (

    <Router>
        <Cabecera />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nuevo" element={<NuevoVideo />} />
        <Route path='*' element={<h1>No Existe</h1>} />
        
      </Routes>
        <Footer />
    </Router>
  )
}

export default App
