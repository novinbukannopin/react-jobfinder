import {CardOfferType} from "../types/CardOfferTypes.tsx";
import {HiGlobe} from "react-icons/hi";

const CardOffers = ({title, type, color, bgColor, bgColor2, icon1, icon2, company, position, location}: CardOfferType) => {
    return (
        <div className={"bg-white rounded-[10px] px-6 py-8 flex flex-col justify-center gap-12 shadow transition-shadow hover:bg-light"}>
            <div className={"flex gap-x-4 items-center"}>
                <button className={"p-2 rounded-full bg-[#F4FEFE] border-none outline-none text-4xl"}
                style={{backgroundColor: `${bgColor}`, color: `${color}`}}>
                    {icon1}
                </button>
                <span>
                    <p className={"text-2xl font-semibold"}>
                        {title}
                    </p>
                    <p className={"text-lg"}>
                        20 Openings
                    </p>
                </span>
            </div>
            <div>
                <p className={"text-3xl font-semibold"}>
                    {position}
                </p>
                <span className={"flex flex-wrap gap-x-4 items-center justify-between text-xl pt-4"}>
                    <p className={"flex items-center gap-x-2"}>
                        <HiGlobe className={"text-2xl"}/> {location}
                    </p>
                    <p className={"text-[#93979D]"}>
                        {type}
                    </p>
                </span>
            </div>
            <div className={"flex items-center justify-between"}>
                <span>
                    <p className={"text-[#93979D] text-lg"}>
                        June 8, 2022 by
                    </p>
                    <p className={"text-xl font-medium"}>
                        {company}
                    </p>
                </span>
                <button className={"rounded-[10px] p-2 text-white border-none outline-none"}
                style={{backgroundColor: `${bgColor2}`}}
                >
                    {icon2}
                </button>
            </div>
        </div>
    );
};

export default CardOffers;
