import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Layout from '../Layout/Layout'
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllOrders from "../Pages/AllOrders/AllOrders";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import DashboardWellcome from "../Pages/DashboadrWellcome/DashboardWellcome";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Logout from "../Pages/Logout/Logout";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";
import UserTable from "../Pages/UserTable/UserTable";
export const router = createBrowserRouter([
    {
        path: '/', element: <Layout />, children: [
            { path: '/', element: <Home /> },
            { path: '/products', element: <Products /> },
            { path: '/product-details/:id', element: <ProductDetails /> },
            { path: '/login', element: <Login /> },
            { path: '/logout', element: <Logout /> },
            { path: '/register', element: <Register /> },
            { path: '/cart', element: <Cart /> },
            { path: '/add-product', element: <AddProduct /> },
            { path: '/dashboard', element: <Dashboard /> },
            { path: '/checkout', element: <Checkout /> },
        ]
    },
    {
        path: '/dashboard', element: <DashBoardLayout />, children: [
            { path: '/dashboard', element: <DashboardWellcome /> },
            { path: '/dashboard/users', element: <UserTable /> },
            { path: '/dashboard/all-orders', element: <AllOrders /> }
        ]
    }
])