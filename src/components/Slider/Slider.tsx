import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <svg
            onClick={onClick}
            className="absolute right-10 top-1/2  z-10"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="38"
            viewBox="0 0 22 38"
            fill="none"
        >
            <path d="M3 3L19 19L3 35" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <svg
            onClick={onClick}
            className="absolute left-10 top-1/2 z-10"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="38"
            viewBox="0 0 22 38"
            fill="none"
        >
            <path d="M19 3L3 19L19 35" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}

export default function TopSectionSlider() {
    const settings: Settings = {
        autoplay: true,
        speed: 300,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        className: 'center',
        infinite: true,
        centerPadding: '60px',
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <>
            <div id="slider" className="relative h-[90vh]">
                <Slider className="relative" {...settings}>
                    <div>
                        <img className="h-[90vh] w-screen object-cover" src="/assets/Slider/s1.webp" alt="Slide 1" />
                    </div>
                    <div>
                        <img className="h-[90vh] w-screen object-cover" src="/assets/Slider/s2.webp" alt="Slide 2" />
                    </div>
                    <div>
                        <img className="h-[90vh] w-screen object-cover" src="/assets/Slider/s3.webp" alt="Slide 3" />
                    </div>
                </Slider>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <img className="-mb-5 -ms-10 scale-x-[-1]" src="/assets/Slider/crown.webp" alt="" />
                    <h1 className="w-full text-center text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                        BACK TO NATURE WITH AFRICA QUEEN
                    </h1>
                    <h1 className="mt-4 text-center text-xl font-extrabold text-white sm:text-2xl md:text-3xl">
                        Easy Trade & TRUST
                    </h1>
                </div>
            </div>
        </>
    );
}
