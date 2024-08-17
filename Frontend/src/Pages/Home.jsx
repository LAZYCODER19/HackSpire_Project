import { useNavigate } from "react-router-dom"

export const Home=()=>{
    const navigate=useNavigate()
    return<div className="bg-tom bg-cover bg-center h-screen">
        <div className=" grid grid-cols-2 text-white text-6xl font-extrabold py-44 pl-32 ">
            <div className="backdrop-blur-sm">
                Farmer-Consumer
                <div className=" pt-3">
                    Connect
                </div>
                <div className=" text-2xl pt-4 font-semibold">
                    Connecting Farmers directly with Consumers
                </div>
                <div className=" overflow-hidden">
                    <button onClick={()=>{
                        navigate("/products")
                    }} className=" text-lg font-semibold bg-green-500 px-4 py-2 hover:bg-green-700 hover:scale-110 duration-700">
                        View Products
                    </button>
                </div>
            </div>
        </div>


    </div>
}