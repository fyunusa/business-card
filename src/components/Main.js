
import Info from './Info';
import About from './About';
import Interest from './Interest';
import Footer from './Footer';


export default function MainCompnet(){
    return (
      <div className='main-container'>
        <div className='business-card-1'>
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
          
          
      </div>
    )
}