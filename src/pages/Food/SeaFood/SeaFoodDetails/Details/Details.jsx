import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Details = ({ data }) => {

    const { strMeal, strCategory, strArea, strInstructions, strMealThumb } = data
    return (
        <div>
            <div className=" flex items-center  gap-5 shadow-md p-4 rounded-md">

                <div className="flex-1">
                    <img className="rounded-md" src={strMealThumb} />
                </div>

                <div className=" mt-5 flex-1 ">

                    <h2 className="text-2xl font-semibold text-right">{strMeal}</h2>

                    <p className="text-base text-right"> <span className="font-medium">Category:</span>  {strCategory}</p>
                    <p className="text-base text-right"> <span className="font-medium">Area:</span>  {strArea}</p>

                </div>
            </div>

            <div className="text-base mt-5">
                <h2><span className="font-semibold">Instructions:</span> {strInstructions}</h2>
            </div>

            <div className="mt-5">
                <Link to="/food" >
                    <button className="bg-orange-300 hover:bg-orange-400 px-4 py-1 rounded-md text-xl font-semibold">Back</button>
                </Link>
            </div>

        </div>
    );
};


    Details.propTypes={
        data:PropTypes.object.isRequired
    }

export default Details;