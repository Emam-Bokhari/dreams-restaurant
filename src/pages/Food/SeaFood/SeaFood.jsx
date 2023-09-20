import {Link} from "react-router-dom"
import PropTypes from "prop-types"

const SeaFood = ({data}) => {

    const {strMeal,strMealThumb}=data
    return (
        <div>
            <div className="p-4 rounded-md shadow-md flex flex-col h-full ">
                <div className="flex justify-center">
                <img className="w-full h-60 rounded-md" src={strMealThumb} />
                </div>
                <h2 className="text-center text-2xl font-semibold mt-5 flex-grow">{strMeal}</h2>
                <div className="mt-5 text-center">
                <Link to="#" ><button className="bg-orange-300 px-4 py-2 rounded-md text-xl font-medium hover:bg-orange-400" >Details</button></Link>
                </div>
            </div>
        </div>
    );
};

    SeaFood.propTypes={
        data:PropTypes.object.isRequired
    }

export default SeaFood;