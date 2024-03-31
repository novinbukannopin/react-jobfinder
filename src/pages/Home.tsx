import {FeaturedJobs, Hero, Navbar, RecommendedJobs, TopCompany} from "../components";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <RecommendedJobs/>
            <TopCompany/>
            <FeaturedJobs/>
        </div>
    );
};

export default Home;
