import PropTypes from 'prop-types';

const SideBar = ({sideBar}) => {
const {recipe_id,recipe_name, preparing_time, calories} = sideBar;

    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{recipe_id}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <button className="btn btn-success rounded-full">Preparing</button>
      </tr>
     </tbody>
     </table>
     </div>
        
     
        
    );
};
SideBar.propTypes = {
    sideBar: PropTypes.object
}

export default SideBar;