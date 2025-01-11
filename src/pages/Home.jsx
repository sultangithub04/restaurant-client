import Banner from '../components/Banner';
import TopFood from '../components/TopFood';
import ExtraOne from '../components/ExtraOne';
import ExtraTwo from '../components/ExtraTwo';
import Additional from '../components/Additional';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <TopFood></TopFood>
            <br />
            <ExtraOne></ExtraOne>
            <br /><br />
            <Additional></Additional>
            <br /><br />
            <ExtraTwo></ExtraTwo><br /><br />
        </div>
    );
};

export default Home;