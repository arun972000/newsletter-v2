
import './App.css'
import NewsLetter from './components/NewsLetter/NewsLetter'
import PDFPage from './components/NewsLetter/PDFPage'
import { Routes, Route } from "react-router-dom"
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<NewsLetter />} />
        <Route path="/pdf/:id" element={<PDFPage />} />
      </Routes>
    </>
  )
}

export default App
