
import {
    Github,
    Facebook,
    Instagram,
    Twitter,
    LinkedIn
} from '../images'

export default function FooterCompnet(){
    return (
      <footer className="footer-nav">
        <div class="table">
            <ul className='foot-icons'>
                <li><img src={Github} alt="logo" /></li>
                <li><img src={Facebook} alt="logo" /></li>
                <li><img src={Instagram} alt="logo" /></li>
                <li><img src={Twitter} alt="logo" /></li>
                <li><img src={LinkedIn} alt="logo" /></li>
            </ul>
        </div>
        
      </footer>
    )
}