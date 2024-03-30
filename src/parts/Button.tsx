import {ButtonTypes} from "../types/ButtonTypes.ts";

const Button = ({variant, children}: ButtonTypes) => {

    const variants = {
        primary: "bg-primary text-white",
        secondary: "bg-[#f3f3f4] text-black",
        tertiary: "bg-[#f9a8d4] text-white"
    }


    return (
        <button
            className={`rounded-full ${variants[variant]} text-lg border-none font-bold px-8 py-3 hoverBtn`}>
            {children}
        </button>
    )

};

export default Button;
