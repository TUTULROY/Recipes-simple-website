import PropTypes from 'prop-types';

const SideBar = ({sideBar, handleAddToSideBar2}) => {
const {recipe_id,recipe_name, preparing_time, calories} = sideBar;


    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
   
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{recipe_id}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td>
        <button onClick={() =>handleAddToSideBar2(sideBar)} className="btn btn-success rounded-full">Preparing</button>
        </td>
      </tr>
     </tbody>
     </table>
     </div>
        
     
        
    );
};
SideBar.propTypes = {
    sideBar: PropTypes.object.isRequired,
    handleAddToSideBar2:PropTypes.func
}

export default SideBar;