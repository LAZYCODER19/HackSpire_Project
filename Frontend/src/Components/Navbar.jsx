

export const Navbar=()=>{
    return<div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-between py-6 shadow-lg bg-black text-white text-2xl font-bold ">
        <div className=" px-10">
            HackSpire 
        </div>
        <div className=" flex px-10 cursor-pointer overflow-hidden">
            <button className=" px-7 hover:scale-125 hover:underline duration-700">
                Home
            </button>
            <button className=" px-7 hover:scale-125 hover:underline duration-700">
                Contact Farmers
            </button>
            <button className=" px-7 hover:scale-125 hover:underline duration-700">
                Shop/Carts
            </button>
            <button className=" px-7 hover:scale-125 hover:underline duration-700">
                About us
            </button>
        </div>
    </div>
}