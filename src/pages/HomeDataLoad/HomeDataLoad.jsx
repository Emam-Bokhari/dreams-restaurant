import {useLoaderData} from "react-router-dom"
import Home from "./Home";
const HomeDataLoad = () => {
    const {categories}= useLoaderData()
    return (
        <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    categories.map((item,index)=><Home key={index} data={item}/>)
                }
            </div>
        </div>
    );
};

export default HomeDataLoad;