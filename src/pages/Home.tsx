import {FeaturedJobs, Footer, Hero, Navbar, RecommendedJobs, TopCompany, WhyCustomer} from "../components";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <RecommendedJobs/>
            <TopCompany/>
            <FeaturedJobs/>
            <WhyCustomer/>
            <Footer/>
        </div>
    );
};

export default Home;
