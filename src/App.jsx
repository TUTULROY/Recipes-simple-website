
import { useState } from "react"
import Banners from "./components/Banners/Banners"
import Card from "./components/Card/Card"
import NavBer from "./components/NavBer/NavBer"
import Recipes from "./components/Recipes/Recipes"
import SideBars from "./components/SideBars/SideBars"
import SideBars2 from "./components/SideBars2/SideBars2"




function App() {
const [sideBars, setSideBars] = useState([]);
const handleAddToSideBar = recipe =>{
  const newSideBar = [...sideBars, recipe];
  setSideBars(newSideBar);
}

const [sideBars2, setSideBars2] = useState([]);

const handleAddToSideBar2 = SideBar =>{
  const newSideBar2 = [...sideBars2, SideBar];
  setSideBars2(newSideBar2)
}

  return (
    <>
    <NavBer></NavBer>
   <Banners></Banners>
   <Card></Card>
   <div className="lg:flex justify-between max-w-7xl mx-auto">

   <Recipes 
   
   handleAddToSideBar={handleAddToSideBar}
   
      ></Recipes>
   <div>
   <SideBars 
   sideBars={sideBars}
    handleAddToSideBar2={handleAddToSideBar2}
    ></SideBars>

   <SideBars2 sideBars2={sideBars2}></SideBars2>
   
   </div>

   </div>
     
    </>
  )
}

export default App
