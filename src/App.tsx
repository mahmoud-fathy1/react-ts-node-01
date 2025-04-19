import './App.css';
import About from './components/About/About';
import OurVision from './components/OurVision/OurVision';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import OurMission from './components/OurMission/OurMission';
import OurProduct from './components/OurProduct/OurProduct';
import ProductsSlider from './components/ProductsSlider/ProductsSlider';
import OurValue from './components/OurValue/OurValue';

function App() {
    return (
        <>
            <Router>
                <div className="relative w-full">
                    <Navbar />
                    <Carousel />
                    <About />
                    <OurVision />
                    <OurMission />
                    <OurValue />
                    <OurProduct />
                    <ProductsSlider />
                    <ContactForm />
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;
