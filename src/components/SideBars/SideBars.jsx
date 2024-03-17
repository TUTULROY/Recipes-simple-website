import PropTypes from 'prop-types';
import SideBar from '../SideBar/SideBar';

const SideBars = ({sideBars}) => {
    return (
        <div className="md:w-1/3">
       
            <div className="">
            <h2 className="text-2xl text-center font-bold">Want to cook: {sideBars.length}</h2>
            <hr />
            {
              sideBars.map(sideBar => <SideBar key={sideBar.recipe_id} sideBar={sideBar}></SideBar>)
            }
 
</div>

            <div className="overflow-x-auto">
            <h2 className="text-2xl text-center font-bold">Currently cooking:</h2>
            <hr />
 
</div>
        </div>
    );
};

SideBars.propTypes = {
  sideBars: PropTypes.array
}

export default SideBars;