import React, { useState } from "react";
import { TbBuildingCommunity, TbBuildingWarehouse } from "react-icons/tb";
import { FaWrench } from "react-icons/fa";

const Lokasi = () => {
  const amountOfData = [
    {
      id: 1,
      icon: <TbBuildingCommunity size={30} />,
      number: 20,
      desc: "induk",
    },
    {
      id: 2,
      icon: <FaWrench size={30} />,
      number: 3,
      desc: "lokasi 1",
    },
    {
      id: 3,
      icon: <TbBuildingWarehouse size={30} />,
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
    <div className="bg-white mobile:m-auto tablet:w-full tablet:m-0 ">
      <div className="flex justify-around">
        <span>Lokasi</span>
        <span onClick={handleIsShow} className="hover:cursor-pointer">
          {isShow ? "Tutup" : "Tampilkan semua"}
        </span>
      </div>
      {isShow ? (
        <ul className="flex gap-x-10 justify-center mobile:overflow-x-auto">
          {amountOfData.map((items) => {
            return (
              <div className="mobile:w-full bg-yellow-400">
                <li
                  key={items.id}
                  className="text-white font-bold mobile:text-sm"
                >
                  <div className="flex justify-center items-center gap-x-10">
                    <div>{items.icon}</div>
                    <div className="flex flex-col justify-end">
                      <span>{items.number}</span>
                      <span>{items.desc}</span>
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
  );
};

export default Lokasi;
