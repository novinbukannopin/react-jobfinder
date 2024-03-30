import {HiSearch} from "react-icons/hi";
import {IoLocateOutline} from "react-icons/io5";

const Hero = () => {
    return (
        <div className={"bg-[#FAFBFC pt-24"}>
            <div className={"flex flex-col items-center justify-center min-h-[60vh] py-16 px-6"}>
                <h1 className={"xl:text7xl lg:text-5xl sm:text-3xl text-2xl xl:leading-normal lg:leading-normal font-bold text-center"}>
                    Find your {" "}<span className={"bg-primary text-white whitespace-pre"}>dream jobs</span> in <br/> New Castle
                </h1>
                <p className={"text-2xl lg:w-1/2 text-center leading-10 my-8"}>
                    When you're looking for a job, you don't want to be overwhelmed with irrelevant jobs. You want to find the perfect job for you. That's where we come in. We help you find the job that's right for you.
                </p>
                <div className={"flex items-center border-2 border-solid border-primary rounded-full h-16 lg:w-2/5 w-full py-2 relative mt-4"}>
                    <input type="text" placeholder="Search for jobs" className={"bg-transparent h-full w-full border-none outline-none absolute px-20 xl:text-2xl text-base"}/>
                    <button className={"bg-primary rounded-full text-white w-12 h-12 absolute left-2 border-none"}>
                        <HiSearch className={"text-2xl ml-2.5"}/>
                    </button>
                    <button className={"flex items-center bg-[F3F3F3] absolute right-2 rounded-full lg:px-4 px-2 h-[90%] xl:text-xl text-sm font-normal gap-x-2"}>
                        <IoLocateOutline className={"text-black lg:text-2xl"}/> All locations
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
