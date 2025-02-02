
const NavBer = () =>{
    return(
        
      <div className="navbar max-w-7xl mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li>
            <a>Recipes</a>
              
            </li>
            <li>
            <a>Recipes</a>
              
            </li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Recipe Calories</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li>
          <a>Recipes</a>
          </li>
          <li><a>About</a></li>
          <li><a>Search</a></li>

        </ul>
      </div>
      <div className="navbar-end">
      <div className="flex gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-full" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-success btn-circle avatar">
        <div className="w-6 rounded-full">
          <div className="w-1/3 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</div>

        </div>
      </div>
     
    </div>
  </div>
      </div>
    </div>

    )
}

export default NavBer;