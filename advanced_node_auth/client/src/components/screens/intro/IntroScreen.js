import Slider from '../../subcomponents/slider/slider'
import Navbar from '../../subcomponents/navbar/Navbar'
import { Sliderdata } from '../../subcomponents/slider/sliderdata';
import './IntroScreen.css'

const IntroScreen = () => {

    return(
        <div className="introContainer">
            <Navbar/>
            <Slider slides={Sliderdata}></Slider>
        </div>
    );
}
export default IntroScreen;