import React from "react";
import { BiSearch, BiBell } from "react-icons/bi";
import cocaCola from "../../assets/coca-cola-4.svg";
import imageProfile from "../../assets/discord-profile.png";

const Header = () => {
  const images = [
    "https://www.pngkey.com/detail/u2e6w7q8e6i1r5o0_discord-profile/",
  ];

  const account = {
    icon: images,
    name: "John Doe",
  };

  return (
    <>
      <div className="flex-1 items-center">
        <div className="flex mobile:justify-center items-center mobile:gap-x-3 mobile:text-[9px] mobile:leading-3 tablet:text-base tablet:justify-around pc:text-xl">
          <div className="flex gap-x-2">
            <span className="text-[#DFE2E0]">Perusahaan</span>
            <span>{">"}</span>
            <span className="font-bold">Mitramas Infosys Global</span>
          </div>
          <div className="flex items-center tablet:gap-x-1 pc:gap-x-3">
            <div>
              <BiSearch />
            </div>
            <div>
              <BiBell />
            </div>
            <div className="tablet:visible">
              <img src={imageProfile} alt="" width={30} />
            </div>
            <div className="mobile:hidden tablet:block">{account.name}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
