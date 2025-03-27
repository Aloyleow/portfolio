import { Route, Routes } from "react-router-dom"
import DisplayPage from "./pages/DisplayPage"
import NavBar from "./components/NavBar"

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<DisplayPage />} />
      </Routes>
    </>
  )
}

export default App
