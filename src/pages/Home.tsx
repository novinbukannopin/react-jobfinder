import {FeaturedJobs, Hero, Navbar, RecommendedJobs, TopCompany, WhyCustomer} from "../components";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <RecommendedJobs/>
            <TopCompany/>
            <FeaturedJobs/>
            <WhyCustomer/>
        </div>
    );
};

export default Home;
