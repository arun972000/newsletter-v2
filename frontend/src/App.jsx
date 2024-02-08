
import './App.css'
import Footer from './components/Footer/Footer'
import { MyNavbar } from './components/Header/Navbar'
import TopLogo from './components/Header/TopLogo'
import NewsLetter from './components/NewsLetter/NewsLetter'
import PDFPage from './components/NewsLetter/PDFPage'
import { Routes, Route } from "react-router-dom"
function App() {


  return (
    <>
      <TopLogo />
      <MyNavbar />
      <Routes>
        <Route path="/" element={<NewsLetter />} />
        <Route path="/pdf/:title" element={<PDFPage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
