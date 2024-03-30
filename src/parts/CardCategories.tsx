import {CardCategoriesTypes} from "../types/CardCategoriesTypes.ts";

const CardCategories = ({title, image, openings}: CardCategoriesTypes) => {
    return (
        <div className={"bg-white rounded-[10px] py-8 px-6 flex items-center justify-between lg:text-2xl"}>
            <span className={"flex items-center gap-x-4"}>
                <img src={image} alt={title} width={30}/> <p>{title}</p>
            </span>
            <p>{openings} Opening</p>
        </div>
    );
};

export default CardCategories;
