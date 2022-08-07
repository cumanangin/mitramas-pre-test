import React, { useState } from "react";
import { TbBuildingCommunity, TbBuildingWarehouse } from "react-icons/tb";
import { FaWrench } from "react-icons/fa";

const Lokasi = () => {
  const amountOfData = [
    {
      id: 1,
      icon: <TbBuildingCommunity size={20} />,
      number: 20,
      desc: "induk 1",
    },
    {
      id: 2,
      icon: <FaWrench size={20} />,
      number: 3,
      desc: "lokasi 1",
    },
    {
      id: 3,
      icon: <TbBuildingWarehouse size={20} />,
      number: 1,
      desc: "lokasi 2",
    },
  ];

  const [isShow, setIsShow] = useState(false);

  const handleIsShow = () => {
    setIsShow(true);
    if (isShow === true) {
      setIsShow(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl h-full">
      <div className="mobile:w-full mobile:mb-5 tablet:w-full ">
        <div className="flex justify-around">
          <span>Lokasi</span>
          <span onClick={handleIsShow} className="hover:cursor-pointer">
            {isShow ? "Sembunyikan" : "Tampilkan semua"}
          </span>
        </div>

        {isShow ? (
          <ul className="flex mobile:justify-around items-center pt-2">
            {amountOfData.map((items) => {
              return (
                <div className="bg-yellow-400">
                  <li key={items.id} className="flex px-1 text-white">
                    <div className=" flex items-center ">
                      {items.icon}
                      <div className="flex flex-col">
                        <span className="flex justify-end mobile:text-sm pc:text-lg">
                          {items.number}
                        </span>
                        <span className="flex justify-end mobile:text-sm pc:text-base">
                          {items.desc}
                        </span>
                      </div>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Lokasi;
