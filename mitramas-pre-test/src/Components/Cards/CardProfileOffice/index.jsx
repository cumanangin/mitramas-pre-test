import React, { useState } from "react";
import cocaCola from "../../../assets/coca-cola-4.svg";
import Office from "../../../assets/office1.jpg";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import Mitramas from "../../../assets/mitramas.png";

const CardProfileOffice = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(true);
    if (isActive === true) {
      setIsActive(false);
    }
  };

  const aktif = isActive;

  const account = {
    name: "John Doe",
  };

  //const active = handleIsActive();

  const company = {
    address: "Jl.Tebet Raya No.42, Jakarta Selatan",
    pic: "John Doe",
    pkp: "3 Maret 2021",
    email: "mig@mitrasolusi.group",
    phoneNumber: "021-5678-1234",
    site: "mitramas.com",
  };

  return (
    <div className="bg-white mobile:w-[70%] mobile:h-full tablet:w-[35%] mobile:m-auto tablet:m-0 ">
      <div
        className="flex relative bg-cover"
        style={{ backgroundImage: `url(${Office})` }}
      >
        <div className="absolute w-full z-10 mobile:justify-center items-center">
          <div className="flex justify-center items-center py-7">
            <div className="bg-white rounded-full p-3 shadow-logo">
              <img src={Mitramas} alt="" width={70} />
            </div>
          </div>
        </div>
        <div className="flex justify-center z-20">
          <div className="py-[50px]"></div>
        </div>
      </div>
      <div>
        <div className="mobile:flex mobile:flex-col pt-10">
          <span className="mobile:text-xs mobile:font-medium mobile:flex mobile:justify-center">
            Mitramas Infosys Global
          </span>
          <span className="mobile:flex mobile:justify-center font-light mobile:text-sm">
            Layanan IT
          </span>
          <span className="flex justify-center items-center text-[#5F9263] pt-2 mobile:text-sm">
            <BiEditAlt />
            Sunting Profil
          </span>
        </div>
        <div className="pt-5 flex-1 px-5 mobile:text-xs">
          <div>
            <span>Status Perusahaan</span>
            <div className="w-full h-full">
              <div className="flex justify-between py-1">
                <div>
                  {isActive ? (
                    <span className="text-green-700">Aktif</span>
                  ) : (
                    <span className="text-gray-500">Tidak Aktif</span>
                  )}
                </div>
                <label className="flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    id="default-toggle"
                    className="sr-only peer"
                  />
                  <div
                    onClick={handleIsActive}
                    className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                  ></div>
                </label>
              </div>
            </div>
          </div>
          <div>
            <span>Singkatan</span>
            <div className="w-full h-full">
              <div className="flex justify-start py-2">
                <span>MIG</span>
              </div>
            </div>
            <span>Alamat Perusahaan</span>
            <div className="w-full h-full">
              <div className="flex justify-start py-2">
                <span>{company.address}</span>
              </div>
            </div>
            <span className="mobile:block tablet:hidden">PIC</span>
            <span className="mobile:hidden tablet:block">
              Penanggung Jawab (PIC)
            </span>
            <div className="flex justify-start py-2">
              <span>{company.pic}</span>
            </div>
            <span>Tanggal PKP</span>
            <div className="w-full h-full">
              <div className="flex justify-start py-2">
                <span>{company.pkp}</span>
              </div>
            </div>
            <span>Email</span>
            <div className="w-full h-full">
              <div className="flex justify-start py-2">
                <span className="flex items-center gap-x-2 text-[#5A8E5F]">
                  <AiOutlineMail />
                  <u>{company.email}</u>
                </span>
              </div>
            </div>
            <span>No Telp</span>
            <div className="w-full h-full">
              <div className="flex justify-start py-2">
                <span className="flex items-center gap-x-2 text-[#5A8E5F]">
                  <BsTelephone />
                  {company.phoneNumber}
                </span>
              </div>
            </div>
            <span>Situs Web</span>
            <div className="w-full h-full">
              <div className="flex justify-start py-2">
                <a
                  href="mitramas.com"
                  className="flex items-center gap-x-2 text-[#5A8E5F]"
                >
                  <TbWorld />
                  {company.site}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfileOffice;
