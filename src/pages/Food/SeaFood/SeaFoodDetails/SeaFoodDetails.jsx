
import { useLoaderData } from 'react-router-dom';
import Details from './Details/Details';

const SeaFoodDetails = () => {
    const { meals } = useLoaderData()
    return (
        <div>
            <div className="my-10">
                {
                    meals.map((item,index) => <Details key={index} data={item} />)
                }
            </div>
        </div>
    );
};

export default SeaFoodDetails;