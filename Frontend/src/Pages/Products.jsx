
import { Card } from "../Components/Card"

export const Products=()=>{
    return<div>
        <div className=" max-w-[1350px] mx-auto">
            <h1 className=" text-center text-4xl py-5">
                PRODUCTS
            </h1>
        </div>
        <div className=" max-w-[1350px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-12">
            <Card image={"/rice.jpg"} heading={"Rice"} price={"1000"}></Card>
           <Card image={"/flour2.jpg"} heading={"Flour"} price={"2000"}></Card>
           <Card image={"/rice.jpg"} heading={"Rice"} price={"1000"}></Card>
           <Card image={"/flour2.jpg"} heading={"Flour"} price={"2000"}></Card>
           <Card image={"/rice.jpg"} heading={"Rice"} price={"1000"}></Card>
           <Card image={"/flour2.jpg"} heading={"Flour"} price={"2000"}></Card>
           <Card image={"/rice.jpg"} heading={"Rice"} price={"1000"}></Card>
           <Card image={"/flour2.jpg"} heading={"Flour"} price={"2000"}></Card>
           <Card image={"/rice.jpg"} heading={"Rice"} price={"1000"}></Card>
           <Card image={"/flour2.jpg"} heading={"Flour"} price={"2000"}></Card>
           <Card image={"/rice.jpg"} heading={"Rice"} price={"1000"}></Card>
           <Card image={"/flour2.jpg"} heading={"Flour"} price={"2000"}></Card>

        </div>
    </div>
}