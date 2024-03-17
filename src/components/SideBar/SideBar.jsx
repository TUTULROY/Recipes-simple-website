

const SideBar = () => {
    return (
        <div className="md:w-1/3">
       
            <div className="overflow-x-auto">
            <h2 className="text-2xl text-center font-bold">Want to cook:</h2>
            <hr />
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <button className="btn btn-success rounded-full">Preparing</button>
      </tr>
    </thead>
    <tbody>
     <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
     </tr>
    
    </tbody>
  </table>
</div>


     
            <div className="overflow-x-auto">
            <h2 className="text-2xl text-center font-bold">Currently cooking: 02</h2>
            <hr />
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
     <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
     </tr>
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default SideBar;