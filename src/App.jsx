
import { useState } from "react"
import Banners from "./components/Banners/Banners"
import Card from "./components/Card/Card"
import NavBer from "./components/NavBer/NavBer"
import Recipes from "./components/Recipes/Recipes"
import SideBars from "./components/SideBars/SideBars"



function App() {
const [sideBars, setSideBars] = useState([]);
const handleAddToSideBar = recipe =>{
  const newSideBar = [...sideBars, recipe];
  setSideBars(newSideBar);
}


  return (
    <>
    <NavBer></NavBer>
   <Banners></Banners>
   <Card></Card>
   <div className="lg:flex justify-between max-w-7xl mx-auto">

   <Recipes handleAddToSideBar={handleAddToSideBar}></Recipes>
   <SideBars sideBars={sideBars}></SideBars>
   </div>
     
    </>
  )
}

export default App
