import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Footer from "../../Footer/Footer";
const MainLaout = () => {
    return (
        <div>

         <section className="max-w-screen-xl mx-auto px-8 md:px-16 my-10">

         <div className="flex justify-between items-center shadow-md rounded-md p-4">

          <div className="flex gap-5 items-center">
            <img className="w-20  bg-white rounded-full ring-2 ring-orange-200" src="./src/assets/logo.png" alt="" />
            <h2 className="text-2xl font-semibold">Dreams <span className="text-orange-400">Restaurant</span></h2>
            </div>

           <div>

           <nav>
                <ul className="flex items-center gap-5 text-xl ">
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/food" >Food</Link>
                    </li>
                    <li>
                        <Link to="/dashboard" >Dashboard</Link>
                    </li>
                </ul>
            </nav>

           </div>

          </div>

            <div className="min-h-screen">
            <Outlet />
            </div>

            <Footer/>
         </section>

        </div>
    );
};

export default MainLaout;