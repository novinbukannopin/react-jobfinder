import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const WhyCustomer = () => {

    const logos = [
        "icon_company/microsoft.png",
        "icon_company/netflix.png",
        "icon_company/amazon.png",
        "icon_company/google.png",
    ]

    const duplicateLogos = []
    while (duplicateLogos.length < 10) {
        duplicateLogos.push(...logos)
    }

    return (
        <div className={"text-center py-24 container mx-auto px-6"}>
            <h2 className={"lg:text-5xl text-2xl font-semibold"}>
                Why Customer Loves Us
            </h2>
            <p className={"text-2xl mt-4 font-light"}>
                What our customer say about us
            </p>
            <div className={"flex items-center justify-center mt-16 pb-12 gap-x-2 lg:w-1/2 mx-auto"}>
                <FaChevronLeft size={30}/>
                <p className={"text-2xl leading-10"}>
                    {" "}
                    Untuk pertama kalinya saya menggunakan jasa dari Jobshunter, saya sangat puas dengan pelayanan yang diberikan. Saya mendapatkan pekerjaan yang sesuai dengan keinginan saya. Terima kasih Jobshunter.

                </p>
                <FaChevronRight size={30}/>
            </div>
            <p className={"text-3xl font-semibold"}>
                Lubosek Hoilo
            </p>
            <p className={"text-xl pt-4"}>
                System Analyst
            </p>
            <div className={"flex items-center lg:gap-16 gap-3 overflow-hidden my-24"}>
                {duplicateLogos.slice(0, 10).map((logo, index) => (
                    <img key={index} src={logo} alt="logo" style={{width: 100, height: 100}} className={"w-40 h-14 object-contain"}/>
                ))}
            </div>
        </div>
    );
};

export default WhyCustomer;
