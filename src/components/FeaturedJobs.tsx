import {Button, CardOffers} from "../parts";
import {OFFERS} from "../constant/offers.tsx";

const FeaturedJobs = () => {
    return (
        <div className={"bg-[#FCFAF6]"}>
            <div className={"container mx-auto px-6 py-24"}>
                <div className={"md:flex items-center justify-between"}>
                    <h2 className={"xl:text-5xl lg:text-3xl text-2xl font-semibold"}>Featured Jobs</h2>
                    <Button variant={"primary"}>View All</Button>
                </div>
                <p className={"text-2xl mt-4 font-light"}>
                    Know your worth and find the job that qualify your skills
                </p>
                <div className={"mt-12 grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8"}>
                    {OFFERS.map((offer, index) => (
                        <CardOffers key={index} {...offer}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;
