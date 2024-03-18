import PropTypes from 'prop-types';
import SideBar from '../SideBar/SideBar';


const SideBars = ({sideBars,handleAddToSideBar2}) => {
  

 
    return (
        <div className="">
       
            <div className="overflow-x-auto">
            <h2 className="text-2xl text-center font-bold">Want to cook: {sideBars.length}</h2>
            <hr />
            
            <table className="table">
            
      <tbody>
        <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
        </tr>
        </tbody>
   
    </table>
    </div>
            {
              sideBars.map(sideBar => <SideBar 
                key={sideBar.recipe_id}
                 sideBar={sideBar}
                 handleAddToSideBar2={handleAddToSideBar2}
                  ></SideBar>)
            }
 
</div>

           
        
    );
};

SideBars.propTypes = {
  sideBars: PropTypes.array,
  handleAddToSideBar2:PropTypes.func
}

export default SideBars;