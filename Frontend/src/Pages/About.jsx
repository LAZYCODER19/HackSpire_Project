import { useNavigate } from "react-router-dom"

export const About=()=>{
    const navigate=useNavigate()
    return<div className="grid grid-cols-2">
        <div className=" pt-44 pl-48">
            <p className=" text-green-500 font-semibold">
                CONNECTING FARMERS & CONSUMERS
            </p>
            <div className=" text-4xl font-semibold py-3">
                Directly linking producers with buyers for fresh produce
            </div>
            <div className=" text-lg">
            Connecting farmers directly with consumers in Kolkata, enabling transparency on product origin and freshness. Farmers list their produce, set prices, and manage orders. Consumers can easily place orders, choose delivery or pickup options, and access educational content about local agriculture and sustainable food systems.
            </div>
            <button onClick={()=>{
                navigate("/contacts")
            }} className=" py-5 underline hover:no-underline">
                Get in touch
            </button>
        </div>
        <div className="py-20 pl-32">
            <img className="h-auto w-96" src="/plug.jpg"></img>
        </div>

    </div>
}