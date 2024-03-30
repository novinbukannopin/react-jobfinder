import {Button, CardCategories, CardRecommendedJobs} from "../parts";
import {CATEGORIES} from "../constant/categories.ts";
import {RECOMMENDED_JOBS} from "../constant/recommended.ts";

const RecommendedJobs = () => {
    return (
        <div className={"bg-[#F5F6FC]"}>
            <div className={"container mx-auto px-6 py-24"}>
                <div className={"md:flex items-center justify-between"}>
                    <h2 className={"xl:text-5xl lg:text-3xl text-2xl font-semibold"}>
                        Recommended Jobs
                    </h2>
                    <span className={"md:flex gap-x-4"}>
                        <Button variant={"secondary"}>Latest Jobs</Button>
                        <Button variant={"primary"}>Premium Jobs</Button>
                    </span>
                </div>
                <p className={"text-2xl mt-4 font-light"}>
                    Explore Suggestions based on your profile
                </p>
                <div className={"xl:flex gap-x-8 mt-16"}>
                    <div className={"xl:w-2/5"}>
                        <div className={"bg-white rounded-[10px] py-8 pl-6 mb-4"}>
                            <h2 className={"text-4xl font-semibold"}>
                                Job Categories
                            </h2>
                        </div>
                        <div>
                            {CATEGORIES.map((category, index) => (
                                <CardCategories image={category.image} title={category.title} openings={category.openings} key={index}/>
                            ))}
                        </div>
                    </div>
                    <div className={"xl:w-3/5 flex flex-col gap-y-3 xl:mt-0 mt-4"}>
                        {RECOMMENDED_JOBS.map((job, index) => (
                            <CardRecommendedJobs time={job.time} type={job.type} title={job.title} job={job.job} amount={job.amount} color={job.color} bgColor={job.bgColor} country={job.country} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendedJobs;
