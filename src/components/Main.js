
import Info from './Info';
import Info2 from './Info2';
import About from './About';
import Interest from './Interest';
import Footer from './Footer';
import Footer2 from './Footer2';


export default function MainCompnet(){
    return (
      <div className='main-container'>
        <div className='business-card-1'>
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
        <div className='business-card-2'>
            <Info2 />
            <About />
            <Interest />
            <Footer2 />
        </div>
      </div>
    )
}