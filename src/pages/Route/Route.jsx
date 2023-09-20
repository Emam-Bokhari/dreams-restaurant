import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../Layouts/MainLayout/MainLaout";
import Home from "../HomeDataLoad/HomeDataLoad";
import Food from "../Food/Food";
import Dashboard from './../Dashboard/Dashboard';

const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLaout />,
        children: [
            {
                path: '/',
                loader:()=>fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
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