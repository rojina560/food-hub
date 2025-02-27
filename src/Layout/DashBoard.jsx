import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaCartPlus, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";

const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu">
                    <li><NavLink to={"/dashboard/userHome"}> <FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to={"/dashboard/reservation"}> <FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to={"/dashboard/cart"}> <FaShoppingCart></FaShoppingCart>Cart</NavLink></li>
                    <li><NavLink to={"/dashboard/reveiw"}> <FaAd></FaAd>Reveiw</NavLink></li>
                    <li><NavLink to={"/dashboard/bookings"}> <FaCalendar></FaCalendar>Booking</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to={"/"}> <FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to={"/order"}> <FaSearch></FaSearch>Menu</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>

            </div>
            
        </div>
    );
};

export default DashBoard;