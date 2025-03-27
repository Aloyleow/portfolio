import { Route, Routes } from "react-router-dom"
import DisplayPage from "./pages/DisplayPage"
import NavBar from "./components/NavBar"

function App() {


  return (
    <div className="background-app">
      <NavBar />
      <Routes>
        <Route path="/" element={<DisplayPage />} />
      </Routes>
    </div>
  )
}

export default App
