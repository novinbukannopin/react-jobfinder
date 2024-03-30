import {CardJobsProps} from "../types/CardJobsTypes.ts";
import {HiOutlineHeart, HiStar} from "react-icons/hi";

const CardJobs = ({title, type, img, color, bgColor}:CardJobsProps) => {
    return (
        <div className={"shadow lg:w-[95%] mt-12"}>
            <div className={"bg-white rounded-t-md px-6 py-8 flex flex-col items-center"}>
                <span className={"flex items-center justify-between w-full"}>
                    <button className={"rounded-full bg-transparent text-lg text-black px-8 py-2 outline-none border-none hoverBtn"}
                    style={{border: `1px solid ${color}`}}
                    >
                        {type}
                    </button>
                    <HiOutlineHeart className={"text-3xl"}/>
                </span>
                <img src={img} alt={title} className={"w-28 h-28 rounded-full my-8"}/>
            </div>
            <div className={"rounded-b-md px-6 py-8"} style={{backgroundColor: `${bgColor}`}}>
                <p className={"text-2xl font-semibold"}>{title}</p>
                <p className={"py-2 text-lg"}>804 46th St Brooklyn, NY</p>
                <div className={"pb-4 flex"}>
                    {Array(5).fill(0).map((_, i) => (
                        <HiStar key={i} className={"text-yellow-400 text-2xl"}/>
                    ))}
                </div>
                <div className={"p-2 border border-solid border-[#E2E4E7] rounded-md flex justify-between text-sm"}>
                    <p>Salary</p>
                    <p style={{color: `${color}`}}>Rp. 3.523.000</p>
                </div>
            </div>
        </div>
    );
};

export default CardJobs;
