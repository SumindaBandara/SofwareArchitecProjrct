import login from "../PAGES/Login/login";
import { Link } from "react-router-dom";
import Product from "../PAGES/Cards/Product";

function Navigation(props){
    return(
        
        
        <div>
            
           <nav className="flex items-center justify-between py-8 px-16 ">

            <div>
                <a className="flex font-semibold text-3xl" to="/">
                    Autos
                </a>
            </div>
                <div className="flex place-items gap-x-10 text-left">
                <a href="/">Home</a>
                <Link to = "/brows">BrowsActions</Link>
                <a href="/cart">Sell an item</a>
                <Link to = "/brows"> My Account</Link>
                <div className="flex items-center gap-x-8">
        <div>
          <a href="/cart" className="flex items-center gap-x-4 relative">
            <p className="text-lg">{0}</p>
            <div className="flex items-center gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
             class="lucide lucide-car">
             <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/>
             <path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
              Cart
            </div>
          </a>
        </div></div>

                    <p>Hi, {props.name}</p>
                </div>
                
             

        

           </nav>
        </div>
        

    );

}
export default Navigation;