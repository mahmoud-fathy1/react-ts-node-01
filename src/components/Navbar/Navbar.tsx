import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="fixed top-0 z-50 w-full bg-slate-600">
            <nav className="h-20 bg-navbar">
                <div className="">
                    <div className="w-6/6 mx-auto flex justify-center gap-3 text-xl">
                        {/* Primary menu and logo */}
                        <div className="my-5 flex items-center gap-10 text-center">
                            {/* logo */}
                            <div className="h-10">
                                <Link
                                    to={'slider'} // Use the "" as the target
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjust the offset based on your layout
                                    duration={500}
                                    className="relative z-20 cursor-pointer"
                                >
                                    <img className="-mt-5 w-24 rounded-full bg-white p-2" src="/assets/logo.webp" alt="" />
                                </Link>
                            </div>
                            {/* primary */}
                            <div className="hidden gap-5 lg:flex ">
                                <Link
                                    activeClass="font-medium text-active-link"
                                    to={'slider'} // Use the "" as the target
                                    spy={true}
                                    smooth={true}
                                    offset={-100} // Adjust the offset based on your layout
                                    duration={500}
                                    className="cursor-pointer"
                                >
                                    <p>Home</p>
                                    <img className="hidden" src="/assets/Navbar/Underline1.svg" alt="" />
                                </Link>
                                <Link
                                    className="cursor-pointer"
                                    activeClass="font-medium text-active-link"
                                    to={'about'} // Use the "" as the target
                                    spy={true}
                                    smooth={true}
                                    offset={-100} // Adjust the offset based on your layout
                                    duration={500}
                                >
                                    <p>About Us</p>
                                    <img className="hidden" src="/assets/Navbar/Underline1.svg" alt="" />
                                </Link>
                                <Link
                                    className="cursor-pointer"
                                    activeClass="font-medium text-active-link"
                                    to={'our-vision'} // Use the "" as the target
                                    spy={true}
                                    smooth={true}
                                    offset={-100} // Adjust the offset based on your layout
                                    duration={500}
                                >
                                    <p>Our Vision</p>
                                    <img className="hidden" src="/assets/Navbar/Underline1.svg" alt="" />
                                </Link>
                                <Link
                                    className="cursor-pointer"
                                    activeClass="font-medium text-active-link"
                                    to={'our-mission'} // Use the "" as the target
                                    spy={true}
                                    smooth={true}
                                    offset={-100} // Adjust the offset based on your layout
                                    duration={500}
                                >
                                    <p>Our Mission</p>
                                    <img className="hidden" src="/assets/Navbar/Underline1.svg" alt="" />
                                </Link>
                                <Link
                                    className="cursor-pointer"
                                    activeClass="font-medium text-active-link"
                                    to={'our-values'} // Use the "" as the target
                                    spy={true}
                                    smooth={true}
                                    offset={-100} // Adjust the offset based on your layout
                                    duration={500}
                                >
                                    <p>Our Values</p>
                                    <img className="hidden" src="/assets/Navbar/Underline1.svg" alt="" />
                                </Link>
                                <Link
                                    className="cursor-pointer"
                                    activeClass="font-medium text-active-link"
                                    to={'our-products'} // Use the "" as the target
                                    spy={true}
                                    smooth={true}
                                    offset={-100} // Adjust the offset based on your layout
                                    duration={500}
                                >
                                    <p>Products</p>
                                    <img className="hidden" src="/assets/Navbar/Underline1.svg" alt="" />
                                </Link>
                            </div>
                            <Link
                                activeClass="font-medium text-active-link"
                                to={'contact-us'} // Use the "" as the target
                                spy={true}
                                smooth={true}
                                offset={-100} // Adjust the offset based on your layout
                                duration={500}
                            >
                                <button
                                    type="button"
                                    className="hidden rounded-md bg-gradient-to-tr from-active-link via-active-link to-green-600 px-5 py-3 text-center text-lg font-medium text-white shadow-sm shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-green-300 dark:shadow-sm dark:shadow-green-800/80 dark:focus:ring-green-800 lg:flex"
                                >
                                    Contact us
                                </button>
                            </Link>
                        </div>
                        {/* secondary */}
                        <div className="flex gap-6">
                            {/* Mobile navigation toggle */}
                            <div className="flex items-center lg:hidden">
                                <button onClick={() => setToggleMenu(!toggleMenu)}>
                                    <Bars3Icon className="h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile navigation */}
                <div
                    className={`fixed z-10  flex origin-top flex-col gap-12 overflow-hidden bg-gray-100  duration-700 lg:hidden ${
                        !toggleMenu ? 'h-0' : 'h-full'
                    }`}
                >
                    <div className="px-8">
                        <div className="mt-2 flex flex-col gap-4 font-bold tracking-wider">
                            <Link
                                className="cursor-pointer"
                                activeClass="border-l-4 border-gray-600"
                                to={'slider'} // Use the "" as the target
                                spy={true}
                                smooth={true}
                                offset={-100} // Adjust the offset based on your layout
                                duration={500}
                                onClick={() => setToggleMenu(!toggleMenu)}
                            >
                                <p>Home</p>
                                <img className="hidden" src="/assets/Navbar/Underline1.svg" alt="" />
                            </Link>
                            <Link
                                className="cursor-pointer"
                                activeClass="border-l-4 border-gray-600"
                                to={'about'} // Use the "" as the target
                                spy={true}
                                smooth={true}
                                offset={-100} // Adjust the offset based on your layout
                                duration={500}
                                onClick={() => setToggleMenu(!toggleMenu)}
                            >
                                <p>About Us</p>
                                <img className="hidden" src="/assets/Navbar/Underline1.svg" alt="" />
                            </Link>
                            <Link
                                className="cursor-pointer"
                                activeClass="border-l-4 border-gray-600"
                                to={'our-vision'} // Use the "" as the target
                                spy={true}
                                smooth={true}
                                offset={-100} // Adjust the offset based on your layout
                                duration={500}
                                onClick={() => setToggleMenu(!toggleMenu)}
                            >
                                <p>Our Vision</p>
                                <img className="hidden" src="/assets/Navbar/Underline1.svg" alt="" />
                            </Link>
                            <Link
                                className="cursor-pointer"
                                activeClass="border-l-4 border-gray-600"
                                to={'our-mission'} // Use the "" as the target
                                spy={true}
                                smooth={true}
                                offset={-100} // Adjust the offset based on your layout
                                duration={500}
                                onClick={() => setToggleMenu(!toggleMenu)}
                            >
                                <p>Our Mission</p>
                                <img className="hidden" src="/assets/Navbar/Underline1.svg" alt="" />
                            </Link>
                            <Link
                                className="cursor-pointer"
                                activeClass="border-l-4 border-gray-600"
                                to={'our-values'} // Use the "" as the target
                                spy={true}
                                smooth={true}
                                offset={-100} // Adjust the offset based on your layout
                                duration={500}
                                onClick={() => setToggleMenu(!toggleMenu)}
                            >
                                <p>Our Values</p>
                                <img className="hidden" src="/assets/Navbar/Underline1.svg" alt="" />
                            </Link>
                            <Link
                                className="cursor-pointer"
                                activeClass="border-l-4 border-gray-600"
                                to={'our-products'} // Use the "" as the target
                                spy={true}
                                smooth={true}
                                offset={-100} // Adjust the offset based on your layout
                                duration={500}
                                onClick={() => setToggleMenu(!toggleMenu)}
                            >
                                <p>Products</p>
                                <img className="hidden" src="/assets/Navbar/Underline1.svg" alt="" />
                            </Link>
                        </div>
                        <Link
                            to={'contact-us'} // Use the "" as the target
                            spy={true}
                            smooth={true}
                            offset={-100} // Adjust the offset based on your layout
                            duration={500}
                            onClick={() => setToggleMenu(!toggleMenu)}
                        >
                            <button
                                onClick={() => setToggleMenu(!toggleMenu)}
                                type="button"
                                className="mt-5 rounded-md bg-gradient-to-tr from-active-link via-active-link to-green-600 px-5 py-3 text-center  text-lg font-medium text-white shadow-sm shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-green-300 dark:shadow-sm dark:shadow-green-800/80"
                            >
                                Contact us
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
