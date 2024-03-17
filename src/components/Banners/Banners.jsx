
const Banners = () =>{
    return (

        <div className="hero min-h-screen mt-6 max-w-7xl mx-auto rounded-xl " style={{backgroundImage: 'url(https://i.postimg.cc/9FY6W2h5/Rectangle-1.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content"> 
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking <br />class tailored for you!</h1>
            <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
            <div className="gap-2">
            <button className="btn mr-2 rounded-full btn-success">Explore Now</button>
            <button className="btn ml-2 rounded-full btn-ghost ">Our Feedback</button>
            </div>
          </div>
        </div> 
      </div>
    )
}
export default Banners;