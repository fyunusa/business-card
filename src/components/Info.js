
// import DP from '../images/user.png';
// import linkedinBtn from '../images/btn-linkedin.svg';
// import EmailBtn from '../images/btn-email.svg';
import {
    DP,
    EmailSvg,
    LinkedInSvg
  } from '../images'

export default function InfoCompnet(){
    return (
      <div className='InfoDiv'>
          <img src={DP} alt="logo" className='profile-pic' />
          <div className='Info-name'>
            <h4>Laura Smith</h4>
            <h5>Frontend Developer</h5>
            <h6>laurasmith.website</h6>
          </div>
          <div className='Info-socials'>
            <img src={EmailSvg} alt="email" />
            <img src={LinkedInSvg} alt="linkedin" className='img2' />
          </div>
      </div>
    )
}