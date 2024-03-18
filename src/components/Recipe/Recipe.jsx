import PropTypes from 'prop-types';


const Recipe = ({recipe, handleAddToSideBar}) => {
    const {recipe_name,recipe_image,short_description,ingredients,preparing_time,calories} =recipe;
    return (
        
        
            <div className="card w-96 bg-base-100 gap-10 shadow-xl">
  <figure>
    <img className="w-60 h-50 rounded-xl" src={recipe_image} alt=""  />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{short_description}</p>
    <hr />
    <div>
        <h2 className='text-xl font-bold'>
        Ingredients : 6
        </h2>
        <h5 className='text-center'>{ingredients.map((gredient,idx)  => <ul key={idx}>  {gredient}

            <li></li>
            <li></li>
            <li></li>
            
        </ul>)}</h5>
        <hr />
        <div className='md:flex'>
            <p className='md:flex w-1/12'><span className=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</span>{preparing_time}</p>
            <p className='md:flex'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
</svg>
</span>{calories}</p>
        </div>
    </div>
    <div className="card-actions">
      <button onClick={() => handleAddToSideBar(recipe)} className="btn btn-success rounded-full">Want to Cook</button>
    </div>
  </div>
</div>
       
    );
};
Recipe.propTypes = {
    recipe:PropTypes.object.isRequired,
    handleAddToSideBar: PropTypes.func
}

export default Recipe;