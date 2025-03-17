import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/DashBorad/Cart/Cart";
import AllUsers from "../Pages/DashBorad/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/AddItems/AddItems";
import ManageItems from "../Pages/DashBorad/ManageItems/ManageItems";

export const router = createBrowserRouter([{
    path:'/',
    element: <Main></Main>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/menu',
            element: <Menu></Menu>
        },
        {
            path: '/order',
            element: <Order></Order>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
            path: '/secret',
            element: <PrivateRoute><Secret></Secret></PrivateRoute>

        }
    ]
},
{
    path: 'dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
        // normal user routes
        {
            path: 'cart',
            element: <Cart></Cart>
        },
        // admin only routes
        {

            path: 'addItems',
            element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
            path: 'manageItems',
            element: <ManageItems></ManageItems>


        },
        {
            path: 'allUsers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
    ]
}
])