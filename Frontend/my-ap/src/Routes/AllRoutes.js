
import {Routes,Route} from "react-router-dom"
import Home from "../Components/Home"
import Navbar from "../Components/Navbar"
import Create from "../Components/Create"

import Login from "../Components/Login"
import Signup from "../Components/Signup"
import About from "../Components/About"
import Edit from "../Components/Edit"

const AllRoutes=()=>{
return(
    <div>
        <Navbar />
<Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/create" element={<Create />} ></Route>
    <Route path="/about" element={<About />} ></Route>
    <Route path="/login" element={<Login />} ></Route>
    <Route path="/signup" element={<Signup />} ></Route>
    <Route path="/edit" element={<Edit />} ></Route>
    
</Routes>
    </div>
)
}

export default AllRoutes;