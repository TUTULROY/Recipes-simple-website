
import PropTypes from 'prop-types';
import SideBar2 from '../SideBar2/SideBar2';

const SideBars2 = ({sideBars2}) => {
    return (
        <div className="overflow-x-auto">
        <h2 className="text-2xl text-center font-bold">Currently cooking:{sideBars2.length}</h2>
        <hr />

        <table className="table">
        
        <tbody>
          <tr>
          <th></th>
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
          </tr>
          </tbody>
     
      </table>


        {
            sideBars2.map(sideBar2 => <SideBar2
                 key={sideBar2.recipe_id} 
                 sideBar2={sideBar2}
                 ></SideBar2>)
        }
     

</div>
    );
};

SideBars2.propTypes = {
    sideBars2: PropTypes.array
}

export default SideBars2;