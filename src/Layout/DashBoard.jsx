import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar,  FaHome, FaList,  FaShoppingBag, FaShoppingCart, FaUsers,   } from "react-icons/fa";
import { MdEmail, MdMenu } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
    const [cart] = useCart()
     // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu uppercase font-sans">
                    {isAdmin ? <><li><NavLink to={"/dashboard/adminHome"}> <FaHome></FaHome>admin home</NavLink></li>
                    <li><NavLink to={"/dashboard/addItems"}> <ImSpoonKnife></ImSpoonKnife>add items</NavLink></li>
                    <li><NavLink to={"/dashboard/manageItems"}> <FaList></FaList>manage items</NavLink></li>
                    <li><NavLink to={"/dashboard/allUsers"}> <FaUsers></FaUsers>all user</NavLink></li></>
                     : <>
                        <li><NavLink to={"/dashboard/userHome"}> <FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to={"/dashboard/history"}> <FaCalendar></FaCalendar>History</NavLink></li>
                    <li><NavLink to={"/dashboard/cart"}> <FaShoppingCart></FaShoppingCart> My Cart {cart.length}</NavLink></li>
                    <li><NavLink to={"/dashboard/reveiw"}> <FaAd></FaAd>Reveiw</NavLink></li>
                    <li><NavLink to={"/dashboard/paymentHistory"}> <FaList></FaList>Reall Payment History</NavLink></li>
                    </>}
                    
                    <div className="divider"></div>
                    <li><NavLink to={"/"}> <FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to={"/order"}> <MdMenu></MdMenu>Menu</NavLink></li>
                    <li><NavLink to={"/order/"}> <FaShoppingBag></FaShoppingBag>Shop</NavLink></li>
                    <li><NavLink to={"/order/contact"}> <MdEmail></MdEmail>contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>

            </div>
            
        </div>
    );
};

export default DashBoard;