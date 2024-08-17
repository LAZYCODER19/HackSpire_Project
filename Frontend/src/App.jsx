import { Navbar } from "./Components/Navbar"
import { About } from "./Pages/About"
import { Home } from "./Pages/Home"
import {Products} from "./Pages/Products"
import { GetInTouch } from "./Pages/GetInTouch"
import { BrowserRouter, Routes , Route } from "react-router-dom"

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/contacts" element={<GetInTouch></GetInTouch>}></Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

