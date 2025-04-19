import './OurProduct.css';
export default function OurProduct() {
    return (
        <>
            <div id="our-products">
                <p className="subHeader p-10 text-center font-lobster">Our Products</p>
                <div className="grid grid-cols-3 gap-10 px-10 lg:px-20">
                    <div className="col-span-3  md:col-span-2">
                        <p className="normalText pb-6">
                            We are sourcing the product from certified local markets in accordance with Sudanese trade
                            regulations.
                        </p>
                        <p className="normalText pb-6">
                            Also the other core of our business is supplying electrical installation materials such as all
                            cables for low &high volts.
                        </p>
                        <p className="normalText pb-6">We are working through the Ministry of International Trade.</p>
                    </div>
                    <div className="col-span-3 m-auto bg-black md:col-span-1">
                        <video controls className="object-cover" src="/assets/ourProduct/v1.mp4"></video>
                    </div>
                </div>
            </div>
        </>
    );
}
