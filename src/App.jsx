import Banners from "./components/Banners/Banners"
import Card from "./components/Card/Card"

import NavBer from "./components/NavBer/NavBer"
import Recipes from "./components/Recipes/Recipes"
import SideBar from "./components/SideBar/SideBar"




function App() {


  return (
    <>
    <NavBer></NavBer>
   <Banners></Banners>
   <Card></Card>
   <div className="md:flex">
   <Recipes></Recipes>
   <SideBar></SideBar>
   </div>
     
    </>
  )
}

export default App
