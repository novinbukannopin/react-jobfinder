import {Button, CardJobs} from "../parts";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import {JOBS} from "../constant/jobs.ts";

const RESPONSIVE = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
}

const TopCompany = () => {
    return (
        <div className={"bg-[#FAFBFC]"}>
            <div className={"container mx-auto px-6 py-24"}>
                <div className={"md:flex items-center justify-between"}>
                    <h2 className={"xl:text-5xl lg:text-3xl text-2xl font-semibold"}>Top Companies</h2>
                    <span className={"md:flex gap-x-4"}>
                        <Button variant={"secondary"}>Browse Jobs</Button>
                        <Button variant={"primary"}>View All</Button>
                    </span>
                </div>
                <p>Know your worth and find the job that qualify your life</p>
                <div>
                    <Carousel responsive={RESPONSIVE} swipeable={true} draggable={true} ssr={true} infinite showDots autoPlay={true} arrows={true} keyBoardControl={true} customTransition={"all .5"} transitionDuration={500}>
                        {JOBS.map((job, index) => (
                            <CardJobs key={index} title={job.title} type={job.type} img={job.img} color={job.color} bgColor={job.bgColor}/>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default TopCompany;
