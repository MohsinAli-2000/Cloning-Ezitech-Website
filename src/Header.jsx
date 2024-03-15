import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const Header = () => {
  const [text, setText] = useState("Web development");
  const [index, setIndex] = useState(0);
  const options = [
    "Web development",
    "Graphic design",
    "Programming",
    "Digital marketing",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % options.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setText(` ${options[index]}`);
  }, [index]);

  return (
    <div
      className="text-white flex flex-col items-center justify-center h-screen opacity-85  bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(../public/background.jpg)` }}
    >
      <h1 className="text-6xl font-bold mt-1 mb-12 text-center">
        Learn the fudametals with our <br /> Expert in
        <span className="text-yellow-300">{text}</span>
      </h1>
      <h2 className="text-2xl font-semibold mt-[-10px] mb-4">
        Utilize Effective Training To Reach Your Potential!
      </h2>
      <div className="flex justify-center items-center rounded">
        <input
          className="text-xl text-gray-600 border-none outline-none py-5 px-8 rounded min-w-96"
          type="text"
        />
        <button className="text-3xl py-4 px-8 bg-white text-blue-500">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      <p className="text-xl font-medium my-4">
        Explore more useful products ❤️
      </p>
      <div className="flex items-center justify-between mt-6">
        <a className="mx-5" href="https://eziblogs.com/" target="_blank">
          <img
            src="../public/image 1.png"
            alt="Eziblogs"
            height={100}
            width={100}
          />
        </a>
        <a
          className="mx-5"
          href="https://pos.ezitech.org/?_gl=1*j9wdyp*_ga*MTQxMTg4OTc4MC4xNzEwNDE1ODgy*_ga_2XEX0EBCTP*MTcxMDQ1NzQwNS4yLjAuMTcxMDQ1NzQwNS4wLjAuMA.."
          target="_blank"
        >
          <img
            src="../public/image 2.jpg"
            alt="Ezipos"
            height={100}
            width={100}
          />
        </a>
        <a className="mx-5" href="https://ezicoding.com/" target="_blank">
          <img
            src="../public/image 3.png"
            alt="EziCoding"
            height={100}
            width={100}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
