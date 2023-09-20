import { useLoaderData } from 'react-router-dom';
import SeaFood from './SeaFood/SeaFood';
const Food = () => {
    const { meals } = useLoaderData()
    return (
        <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    meals.map((item,index) => <SeaFood key={index} data={item} />)
                }
            </div>
        </div>
    );
};

export default Food;