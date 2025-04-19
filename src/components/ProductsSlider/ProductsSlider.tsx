import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function ProductsSlider() {
    interface Props {
        className?: string;
        style?: React.CSSProperties;
        onClick?: () => void;
    }

    function SampleNextArrow(props: Props) {
        const { className, style, onClick } = props;
        return (
            <svg
                className={className}
                style={{ ...style, display: 'block' }}
                onClick={onClick}
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="38"
                viewBox="0 0 22 38"
                fill="none"
            >
                <path d="M3 3L19 19L3 35" stroke="#214C23" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        );
    }

    function SamplePrevArrow(props: Props) {
        const { className, style, onClick } = props;
        return (
            <svg
                className={className}
                style={{ ...style, display: 'block' }}
                onClick={onClick}
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="38"
                viewBox="0 0 22 38"
                fill="none"
            >
                <path
                    d="M19 3L3 19L19 35"
                    stroke="#214C23"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        );
    }
    const settings = {
        autoplay: true,
        speed: 300,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        className: 'center',
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 4,
        swipeToSlide: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const partnersLogos = [
        { img: '/assets/productSlider/p1.webp', title: 'Peanut' },
        { img: '/assets/productSlider/p2.webp', title: 'Gum Arabic' },
        { img: '/assets/productSlider/p3.webp', title: 'Soybean' },
        { img: '/assets/productSlider/p4.webp', title: 'Dairy products' },
        { img: '/assets/productSlider/p5.webp', title: 'Sesame seed' },
        { img: '/assets/productSlider/p6.webp', title: 'Baobab' },
    ];
    return (
        <>
            <div className="px-20">
                <div className="mb-10 mt-10 text-center text-xl font-semibold text-green-900">
                    <p>These are examples of our products.</p>
                </div>
                <div className="m-auto w-full text-center">
                    <Slider {...settings}>
                        {partnersLogos.map((item, index) => (
                            <div className="relative" key={index}>
                                <img className="logo-image m-auto px-1" src={item.img} alt={`Image ${index + 1}`} />
                                <p className="absolute bottom-0 right-1/2 z-30 w-full translate-x-1/2 text-center text-white">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}
