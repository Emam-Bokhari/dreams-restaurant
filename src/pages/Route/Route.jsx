import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../Layouts/MainLayout/MainLaout";
import Home from "../HomeDataLoad/HomeDataLoad";
import Food from "../Food/Food";
import Dashboard from './../Dashboard/Dashboard';
import SeaFoodDetails from "../Food/SeaFood/SeaFoodDetails/SeaFoodDetails";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLaout />,
        children: [
            {
                path: '/',
                loader: () => fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
                element: <Home />
            },
            {
                path: '/food',
                loader: () => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`),
                element: <Food />
            },
            {
                path: '/food/:idMeal',
                element: <SeaFoodDetails />,
                loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]

    }
])
export default Route

