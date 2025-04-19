import './OurValue.css';
export default function OurValue() {
    return (
        <>
            <div id="our-values" className=" bg-value relative  p-20 pt-10">
                <img
                    width={110}
                    height={100}
                    className="absolute left-0 top-0 -translate-y-1/2"
                    src="/assets/ourValues/plant.webp"
                    alt=""
                />
                <img
                    width={110}
                    height={100}
                    className="absolute bottom-0 right-0 translate-y-1/2"
                    src="/assets/ourValues/beans.webp"
                    alt=""
                />
                <p className="subHeader flex   justify-center text-center   ">
                    <div className="flex  items-center">
                        <span>
                            <img className=" me-4" src="/assets/ourValues/Vector.svg" alt="" />
                        </span>
                        <span className="font-lobster">Our Values</span>
                    </div>
                </p>
                <div className="grid grid-cols-4 ">
                    <div className="col-span-4 mx-auto sm:col-span-2   lg:col-span-1 ">
                        <img className="p-10" src="/assets/ourValues/values1.webp" alt="" />
                        <p className="text-center">Customer first</p>
                    </div>
                    <div className="col-span-4 mx-auto sm:col-span-2  lg:col-span-1 ">
                        <img className="p-10" src="/assets/ourValues/values2.webp" alt="" />
                        <p className="text-center">Lead with agility</p>
                    </div>
                    <div className="col-span-4 mx-auto sm:col-span-2   lg:col-span-1 ">
                        <img className="p-10" src="/assets/ourValues/values3.webp" alt="" />
                        <p className="text-center">Build trust</p>
                    </div>
                    <div className="col-span-4 mx-auto sm:col-span-2   lg:col-span-1 ">
                        <img className="p-10" src="/assets/ourValues/values4.webp" alt="" />
                        <p className="text-center">Innovate</p>
                    </div>
                </div>
            </div>
        </>
    );
}
