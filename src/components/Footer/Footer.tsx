import { NavLink } from 'react-router-dom';
import './footer.css';
function Footer() {
    return (
        <>
            <div className="bg-footer py-5">
                <div className="flex flex-col items-center justify-center gap-5 px-5 pb-5 sm:flex-row sm:gap-10">
                    <NavLink to="/" className="">
                        <img className="w-36 rounded-full bg-white  p-2" src="/assets/logo.webp" alt="" />
                    </NavLink>
                    <div className="flex flex-col gap-3 text-white">
                        <div className="flex">
                            <img className="me-2 w-6" src="/assets/Footer/location-icon.svg" alt="" />
                            <span>Main office: El mamora , Block84, building no.568</span>
                        </div>
                        <div className="flex">
                            <img className="me-2 w-6" src="/assets/Footer/location-icon.svg" alt="" />
                            <span>Sub office: Seed Abdelmageed, Elbldia street across Elteear Jmeel street.</span>
                        </div>
                        <div className="flex">
                            <img className="me-2 w-6" src="/assets/Footer/phone-icon.svg" alt="" />
                            <span>Tel:0029990560521</span>
                        </div>
                        <div className="flex">
                            <img className="me-2 w-6" src="/assets/Footer/email-icon.svg" alt="" />
                            <span>mohamedup2002@gmail.com</span>
                        </div>
                    </div>
                </div>
                <p className="px-2 text-center text-white">
                    © copyright 2023 Africa Queen | All Rights Reserved | Designed and developed by Core Technology
                    Solutions
                </p>
            </div>
        </>
    );
}

export default Footer;
