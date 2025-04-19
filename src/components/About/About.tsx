import './About.css';
export default function About() {
    return (
        <>
            <div id="about" className="mx-auto pt-10">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 p-4  md:col-span-7">
                        <p className="subHeader mb-5 px-5 text-center font-lobster md:mb-10 md:text-right">About Us</p>
                        <p className="normalText mb-5 grid grid-cols-12   ps-20 text-start">
                            <div className="col-span-1 mx-auto">
                                <div className="rectangle  inline-block "></div>
                            </div>
                            <div className="col-span-10">
                                Africa queen for trade and services Co. LTD was founded in 2004 as private company working in
                                the field of trading and services.
                            </div>
                        </p>
                        <p className="normalText mb-5 grid grid-cols-12  ps-20 text-start">
                            <div className="col-span-1 mx-auto">
                                <div className="rectangle  inline-block "></div>
                            </div>
                            <div className="col-span-10">
                                It is one of the Prime Leaders in trading agricultural products{' '}
                            </div>
                        </p>
                        <p className="normalText mb-5 grid grid-cols-12  ps-20 text-start">
                            <div className="col-span-1 mx-auto">
                                <div className="rectangle  inline-block "></div>
                            </div>
                            <div className="col-span-10">
                                Our <span className="font-bold">CEO Mr Mohamed El Tayb</span> is a member of the{' '}
                                <span className="font-bold">Trade Point Sudan</span>{' '}
                            </div>
                        </p>
                    </div>

                    <div className="col-span-12  p-4     md:col-span-5">
                        <img className="about-img m-auto p-3 ps-0" src="/assets/about/our-ceo.webp" alt="" />
                    </div>
                </div>{' '}
            </div>
        </>
    );
}
