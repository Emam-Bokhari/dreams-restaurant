import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../Layouts/MainLayout/MainLaout";
import Home from "../Home/Home";
import Food from "../Food/Food";
import Dashboard from './../Dashboard/Dashboard';

const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLaout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:'/food',
                element:<Food/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            }
        ]

    }
])
export default Route