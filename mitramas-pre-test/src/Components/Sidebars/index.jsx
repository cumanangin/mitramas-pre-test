import React from "react";
import { BiHomeCircle, BiTask } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";
import { TbBuildingSkyscraper } from "react-icons/tb";
import cocaCola from "../../assets/coca-cola-4.svg";

const Sidebars = () => {
  const sidebarIcons = [
    BiHomeCircle,
    HiOutlineTicket,
    BiTask,
    TbBuildingSkyscraper,
  ];

  return (
    <>
      <div className="w-[70px] h-screen bg-white">
        <div className="flex justify-center items-center py-2">
          {" "}
          {/* logo */}
          <div className="w-10">
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
                  <div className="">
                    <Icons size={20} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebars;
