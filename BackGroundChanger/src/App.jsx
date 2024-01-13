import { useState } from "react"

function App() {

  const [color, setColor] = useState("bg-black");
  function changeClr(color){
    setColor(color)
    console.log(color)
  }
  const childColor =(backcolor)=> `text-lg cursor-pointer border-2 border-black rounded-2xl px-4 ${backcolor}`
  return (
    <div className={`text-2xl flex flex-col-reverse h-screen ${color}`}>
      
      <div className="px-10 py-1 lg:mb-10 sm:mb-5 border rounded-xl bg-red-500 flex flex-row space-x-5 self-center text-white">
        <button className={childColor("bg-black")} onClick={()=>changeClr("bg-black")}>Black</button>
        <button className={childColor("bg-white text-black")} onClick={()=>changeClr("bg-white")} >White</button>
        <button className={childColor("bg-sky-500")} onClick={()=>changeClr("bg-sky-500")}>Blue</button>
        <button className={childColor("bg-violet-400")} onClick={()=>changeClr("bg-violet-400")} >Lavender</button>
        <button className={childColor("bg-gray-700")} onClick={()=>changeClr("bg-gray-700")} >Gray</button>
        <button className={childColor("bg-green-500")} onClick={()=>changeClr("bg-green-500")} >Green</button>
      </div>
    </div>
  )
}

export default App
