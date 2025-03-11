import { Route, Routes } from "react-router-dom"
import DisplayPage from "./pages/DisplayPage"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<DisplayPage/>}/>
      </Routes>
    </>
  )
}

export default App
