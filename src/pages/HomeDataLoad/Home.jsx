import PropTypes from 'prop-types'

const Home = ({ data }) => {

    const { strCategory, strCategoryThumb } = data
    return (
        <div>

            <div className="  flex flex-col p-4 shadow-md rounded-md">

                <div className="text-center">
                    <img className="h-60 w-full rounded-md" src={strCategoryThumb} />
                </div>
                <h2 className="text-center text-xl font-semibolda mt-2"> <span className="text-orange-400">Category: </span> {strCategory}</h2>

            </div>
        </div>
    );
};

Home.propTypes = {
    data: PropTypes.object.isRequired
}

export default Home;