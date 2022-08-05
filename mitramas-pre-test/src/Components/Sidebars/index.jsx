import React, { useState } from "react";
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

  const [isResponsive, setIsReponsive] = useState(false);

  const handleResponsive = () => {
    setIsReponsive(true);
    if (isResponsive === true) {
      setIsReponsive(false);
    }
  };

  return (
    <>
      <div className="mobile:flex mobile:justify-center mobile:items-center mobile:hover:cursor-pointer ">
        {/* logo */}
        <div>
          {isResponsive ? (
            <div className="bg-white h-screen mobile:w-10 tablet:w-[60px]">
              <div className="flex justify-center mobile:py-2">
                <ImCancelCircle onClick={handleResponsive} />
              </div>
              <div className="flex justify-center items-center py-2">
                {/* logo */}
                <div className="mobile:w-10 pt-6">
                  <img src={cocaCola} />
                </div>
              </div>
              <div>
                {/* div for icon sidebar */}
                <ul className="flex-col">
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
          ) : (
            <div className="mobile:w-10 tablet:w-[60px]">
              <div className="flex justify-center mobile:py-2">
                <GiHamburgerMenu onClick={handleResponsive} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebars;
