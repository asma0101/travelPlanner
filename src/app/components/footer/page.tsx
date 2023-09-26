import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <>
          
      <footer className="bg-gray-800 text-white text-center py-4">
        <div className="flex justify-center mb-4">
          <a href="#" className="text-white mx-2 ">
            <FontAwesomeIcon  icon={faFacebook} />
          </a>
          <a href="#" className="text-white mx-2">
            <FontAwesomeIcon  icon={faInstagram} />
          </a>
          <a href="#" className="text-white mx-2">
            <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#" className="text-white mx-2">
            <FontAwesomeIcon  icon={faLinkedin} />
          </a>
        </div>
        <p className="text-sm">All rights reserved</p>
      </footer>
      </>      
    );
}
export default Footer;