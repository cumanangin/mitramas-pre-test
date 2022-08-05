import React, { Children, useState } from "react";
import { BiHomeCircle, BiTask } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import cocaCola from "../../assets/coca-cola-4.svg";

const Sidebars = () => {
  const sidebarIcons = [
    BiHomeCircle,
    HiOutlineTicket,
    BiTask,
    TbBuildingSkyscraper,
  ];

  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(true);
    if (showSidebar === true) {
      setShowSidebar(false);
    }
  };

  return (
    <>
      {showSidebar ? (
        <div className="">
          <div className="bg-white h-screen mobile:w-10 ease-in-out duration-300 mobile:py-2">
            <div className="flex justify-center items-center py-2">
              <ImCancelCircle onClick={handleSidebar} />
            </div>
            <div className="flex justify-center items-center py-3">
              <img src={cocaCola} alt="" width={35} />
            </div>
            <div>
              {/* div for icon sidebar */}
              <ul className="">
                {sidebarIcons.map((itemIcons, index) => {
                  const Icons = sidebarIcons[index];
                  return (
                    <li
                      key={itemIcons.index}
                      className="flex justify-center items-center py-3 hover:bg-[#F0F6F1] hover:cursor-pointer hover:duration-200"
                    >
                      <div className="mobile:w-7">
                        <Icons size={25} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="mobile:w-10 py-2">
          <div className="flex justify-center items-center">
            <GiHamburgerMenu onClick={handleSidebar} />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebars;
