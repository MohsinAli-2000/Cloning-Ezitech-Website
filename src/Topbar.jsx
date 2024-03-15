import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareBehance,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function Topbar() {
  return (
    <>
      <div className="bg-blue-500 text-white flex px-4 py-1 items-center justify-center">
        <FontAwesomeIcon className="mx-3" icon={faPhone} />
        <p>+923455555396</p>
        <FontAwesomeIcon className="mx-3 ml-14" icon={faLocationDot} />
        <p>Office #304-B Amna Plaza, Rawalpindi, Pakistan</p>
        <FontAwesomeIcon className="mx-3 ml-14" icon={faClock} />
        <p>Mon - Fri 8.00 - 20.00</p>
        <a href="https://www.facebook.com" target="_blank">
          <FontAwesomeIcon className="mx-2 ml-14" icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <FontAwesomeIcon className="mx-2" icon={faInstagram} />
        </a>
        <a href="https://www.behance.net/" target="_blank">
          <FontAwesomeIcon className="mx-2" icon={faSquareBehance} />
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <FontAwesomeIcon className="mx-2" icon={faLinkedin} />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
        </a>

        <FontAwesomeIcon className="ml-14" icon={faUser} />
        <a className="mx-3 cursor-pointer">Login | Register</a>
      </div>
    </>
  );
}

export default Topbar;
