import { Button } from "../parts";
import {FOOTERITEMS} from "../constant/footer.ts";

const Footer = () => {
    return (
        <footer >
            <div className={"bg-[#1B1F23] py-20"}>
                <div className={"container mx-auto px-6"}>
                    <h2 className={"lg:text-4xl text-white text-center font-semibold"}>Ready for your Next Hire with Us</h2>
                    <p className={"lg:w-1/2 mx-auto text-white text-center text-xl py-8"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.
                    </p>
                    <div className={"flex justify-center my-8"}>
                        <Button variant={"primary"}>Login to Company</Button>
                    </div>

                    <section className={"flex flex-wrap pt-16 justify-between gap-8"}>
                        <div className={"flex flex-col justify-between text-white"}>
                            <span className={"flex items-center lg:text-5xl text-3xl"}>
                                <button className={"rounded-full py-1 text-white bg-primary lg:text-5xl text-3xl outline-none border-none"}>Jo</button>
                                <p className={"font-semibold leading-tight text-white"}>bline</p>
                            </span>
                            <p className={"text-white text-lg"}>Call Us</p>
                            <p className={"text-white text-lg"}>(123) 456-71823</p>
                            <p>
                                {" "}
                                90 fifth Avenue, 3rd Floor <br/>
                                New York, NY 10011 <br/> office@jobline.co
                            </p>
                        </div>
                        {FOOTERITEMS.map((item, index) => (
                        <div key={index}>
                            <h6 className={"text-white text-2xl pb-6"}>{item.title}</h6>
                            <ul className={"flex flex-col gap-6 text-lg"}>
                                {item.item.map((item, index) => (
                                <li key={index} className={"text-white no-underline hover:text-primary cursor-pointer"}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        ))}
                    </section>
                </div>
            </div>
            <div className={"flex text-center py-2 w-full"}>
                <p className={"block w-full"}>© 2023 Jobline. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
