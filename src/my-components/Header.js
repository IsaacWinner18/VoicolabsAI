import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowDown,
  faBars,
  faCoffee,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

// Add the solid icons to the library
library.add(faCoffee);

const Header = () => {
  

  const [showProduct, setShowproduct] = useState(false);
  const showProductFunction = () => {
    setShowproduct(!showProduct);
    setShowResource(false);
    setShowCompany(false);
  };

  const [showResource, setShowResource] = useState(false);
  const showResourceFunction = () => {
    setShowResource(!showResource);
    setShowproduct(false);
    setShowCompany(false);
  };

  const [showCompany, setShowCompany] = useState(false);
  const showCompanyFunction = () => {
    setShowCompany(!showResource);
    setShowproduct(false);
    setShowResource(false);
  };

  return (
    <div className="bg-gray-200">
     
      <div className=" bg-white mx-2 mt-2 px-7 py-7 ">
      
        <div>
          <div className="text-4xl font-custom"> VoicoLabs</div>
        </div>
        <div className="headings flex justify-end gap-x-16 -mt-5 cursor-pointer font-custom tracking-wider leading-5 text-lg font-thin opacity-75">
          <div onClick={showProductFunction}>
            Products <FontAwesomeIcon icon={faArrowDown} />
            <ul
              className={`bg-white border-2 border-solid border-gray-200 px-4 pt-1 pb-14  rounded absolute top-0 ul ${
                showProduct ? "block" : "hidden"
              } `}
            >
              <li className="text-lg mb-5">SPEECH SYNTHESIS</li>
              <li className="text-sm">Text To Speech</li>
            </ul>
          </div>
          <div onClick={showResourceFunction}>
            Resources <FontAwesomeIcon icon={faArrowDown} />
            <ul
              className={`bg-white border-2 border-solid border-gray-200 px-4 pt-1 pb-14  rounded absolute top-0 ul ${
                showResource ? "block" : "hidden"
              }  `}
            >
              <li className="text-sm"> Joj Text To Speech API</li>
            </ul>
          </div>
          <div onClick={showCompanyFunction}>
            Company <FontAwesomeIcon icon={faArrowDown} />
            <ul
              className={`bg-white border-2 border-solid border-gray-200 px-8 pt-1 pb-12  rounded absolute top-0 ul ${
                showCompany ? "block" : "hidden"
              }  `}
            >
              <li className="text-sm mb-3"> About</li>
              <li className="text-sm mb-3"> Careers</li>
              <li className="text-sm mb-3"> Blogs</li>
            </ul>
          </div>
          <div className="flex justify-end gap-12 ml-10">
            <div>Sign in</div>
            <div className="px-3 py-3 bg-blue-600 text-white rounded -mt-2">
              Sign up
            </div>
          </div>
        </div>
        <div className="bars hidden opacity-60"><FontAwesomeIcon icon={faBars} /></div>
      </div>

    
    </div>
  );
};

export default Header;
