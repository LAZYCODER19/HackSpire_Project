import { Contacts } from "../Components/Contact"


export const GetInTouch=()=>{
    return<div className=" grid grid-cols-2">
        <div>
            <Contacts heading={"GET IN TOUCH"} subheading={"Reach out for any"} subheading2={"inquiries or assistance"} inputbox={"Name"} inputbox2={"Email Address"} inputbox3={"Phone Number"} inputbox4={"Message"} bottomText={"I allow this website to store my submission so they can respond to my inquiry."} button2={"Submit"}></Contacts>
        </div>
    </div>
}