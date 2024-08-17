
export const Contacts=({heading,subheading,subheading2,inputbox,inputbox2,inputbox3,inputbox4,bottomText,button2})=>{
    return<div className=" py-10 pl-56">
        <div className="text-sm text-green-500 font-semibold">
            {heading}
        </div>
        <div className=" text-4xl font-semibold pt-4 ">
            {subheading}
        </div>
        <div className=" text-4xl font-semibold pb-4">
            {subheading2}
        </div>
        <div className=" font-semibold">    
            {inputbox}
            <span className=" pl-1 text-red-500">
                *
            </span>
        </div>
        <input type="text" placeholder="Raju Bhai" className=" border border-black h-9 w-96 my-2"></input>
        <div className=" font-semibold">
            {inputbox2}
            <span className=" pl-1 text-red-500">
                *
            </span>
        </div>
        <input type="text" placeholder="Raju@gmail.com" className=" border border-black h-9 w-96 my-2"></input>
        <div className=" font-semibold">
            {inputbox3}
            <span className=" pl-1 text-red-500">
                *
            </span>
        </div>
        <input type="number" placeholder="9564752030" className=" border border-black h-9 w-96 my-2"></input>
        <div className=" font-semibold">
            {inputbox4}
        </div>
        <textarea type="text" className=" block border border-black h-32 w-96 my-2"></textarea>
        <div class="flex items-center">
            <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="link-checkbox" className="w-96 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{bottomText}</label>
        </div>
        <button className=" h-10 w-96 my-3 bg-green-500 text-center hover:bg-green-600">
            {button2}
        </button>
        
    </div>
}