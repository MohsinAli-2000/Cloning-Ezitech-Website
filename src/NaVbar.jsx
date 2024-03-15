import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NaVbar = () => {
  return (
    <div
      className="px-1 py-1 bg-black flex items-center justify-between font-medium text-white border-b-2 border-gray-500 opacity-85 bg-cover"
      style={{ backgroundImage: `url(../public/background.jpg)` }}
    >
      <img
        src="../public/EZITECH-LOGO-white.png"
        width={200}
        height={200}
        alt="EziLogo"
      />
      <a href="#home" className="hover:text-blue-600">
        {"Home".toUpperCase()}
      </a>
      <a href="#home" className="hover:text-blue-600">
        {"About us".toUpperCase()}
      </a>
      <a href="#home" className="hover:text-blue-600">
        {"Certifications".toUpperCase()}
      </a>
      <a href="#home" className="hover:text-blue-600">
        {"Internships".toUpperCase()}
      </a>
      <a href="#home" className="hover:text-blue-600">
        {"Seminars".toUpperCase()}
      </a>
      <a href="#home" className="hover:text-blue-600">
        {"Intern Portal".toUpperCase()}
      </a>
      <span>|</span>
      <div className="mx-3 flex items-center justify-between cursor-text icon-container ">
        <FontAwesomeIcon
          className="mx-1 text-4xl cursor-pointer"
          icon={faHeart}
        />
        <FontAwesomeIcon
          className="mx-1 border-2 border-solid p-2 cursor-pointer icon hover:bg-blue-500 transition"
          icon={faMagnifyingGlass}
        />
      </div>
    </div>
  );
};

export default NaVbar;
