import {useState} from "react";
import {MdClose} from "react-icons/md";
import {HiMenuAlt3} from "react-icons/hi";
import {Button} from "../parts";
import {NAV_LINKS} from "../constant/links.ts";

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () => {
        setDropdown(!dropdown);
    }

    return (
        <nav className={"w-full h-24 flex flex-col justify-center items-center bg-white fixed z-30"}>
            <div className={"container mx-auto lg:px-26"}>
                <div className={"lg:w-full w-11/12 mx-auto h-full flex justify-between items-center"}>
                    <div className={"flex flex-col gap-y-4"}>
                        <div className={"flex items-center gap-x-2"}>
                            <span className={"flex items-center lg:text-5xl text-3xl"}>
                                <button className={"rounded-full py-1 text-white bg-primary lg:text-5xl text-3xl outline-none border-none"}>Jo</button>
                                <p className={"font-semibold leading-tight"}>bline</p>
                            </span>
                        </div>
                    </div>
                    <ul className={"flex-1 flex justify-center items-center xl:gap-12 gap-x-4 max-lg:hidden"}>
                        {
                            NAV_LINKS.map((link, index) => (
                            <a href={link.path} key={index} className={"leading-normal no-underline text-black font-bold text-lg hover:text-primary"}>{link.title}</a>
                        ))}
                    </ul>
                    <div className={"flex max-lg:hidden gap-x-4"}>
                        <Button variant={"secondary"}>Sign Up</Button>
                        <Button variant={"primary"}>Sign In</Button>
                    </div>
                    {dropdown ? (
                        <div>
                            <MdClose onClick={showDropdown} className={"lg:hidden text-[22px] cursor-pointer text-black"} />
                        </div>
                    ):(
                        <div>
                            <HiMenuAlt3 onClick={showDropdown} className={"lg:hidden text-[22px] cursor-pointer text-black"}/>
                        </div>
                    )}
                </div>
                {dropdown
                    ? <div onClick={showDropdown} className={"lg:hidden w-full h-[100vh] fixed top-24 bg-black ease-in-out duration-100"}>
                        <div className={"w-full h-[320px] flex flex-col items-baseline pt-8 gap-4"}>
                            <ul className={"text-center p-0 flex flex-col justify-center w-full gap-y-8"}>
                                {
                                    NAV_LINKS.map((link, index) => (
                                        <a href={link.path} key={index} className={"leading-normal no-underline text-black font-bold text-lg hover:text-primary"}>{link.title}</a>
                                    ))}
                            </ul>
                            <div className={"flex flex-col justify-center items-center w-full gap-y-8 mt-4"}>
                                <Button variant={"secondary"}>Sign Up</Button>
                                <Button variant={"primary"}>Sign In</Button>
                            </div>
                        </div>
                    </div>
                    : null}
            </div>
        </nav>
    );
};

export default Navbar;
