import PropTypes from 'prop-types'

const SideBar2 = ({sideBar2}) => {
    const {recipe_id,recipe_name, preparing_time, calories} = sideBar2;

    return (
        <table className="table">
        
        <tbody>
          <tr>
          <th>{recipe_id}</th>
          <th>{recipe_name}</th>
          <th>{preparing_time}</th>
          <th>{calories}</th>
          </tr>
          </tbody>
     
      </table>
    );
};

SideBar2.propTypes = {
    sideBar2: PropTypes.object
}

export default SideBar2;