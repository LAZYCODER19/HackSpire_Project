import { useNavigate } from "react-router-dom"

export const Navbar=()=>{
    const navigate=useNavigate("");
    return<div className="grid grid-cols-10 py-5 bg-cyan-50">
        <div className=" col-span-4 font-bold text-2xl text-center">
            FARMER-COSUMER-CONNECT
        </div>
        <span className=" col-span-1"></span>
        <button onClick={()=>{
            navigate("/")
        }} className=" col-span-1 hover:underline hover:text-green-500 duration-500">
            Home
        </button>
        <button onClick={()=>{
            navigate("/about")
        }} className=" col-span-1 hover:underline hover:text-green-500 duration-500">
            About
        </button>
        <button onClick={()=>{
            navigate("/products")
        }} className=" col-span-1 hover:underline hover:text-green-500 duration-500">
            Products
        </button>
        <button onClick={()=>{
            navigate("/contacts")
        }} className=" col-span-1 border-2 border-black py-1.5 hover:bg-green-500 hover:text-white hover:border-2 hover:border-green-500 duration-500">
            Contacts
        </button>
    </div>
}