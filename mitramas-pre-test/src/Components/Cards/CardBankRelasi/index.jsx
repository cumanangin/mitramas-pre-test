import React, { useState } from "react";
import Visa from "../../../assets/Visa.png";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";

const Bankrelasi = () => {
  const bankAccount = [
    {
      id: 1,
      icon: Visa,
      namaBank: "Bank Bukopin",
      user: "Yusron Taufiq",
      currency: "IDR",
    },
    {
      id: 2,
      icon: Visa,
      namaBank: "Bank Bukopin",
      user: "Yusron Taufiq",
      currency: "IDR",
    },
  ];

  const relasi = [
    {
      id: 1,
      icon: <AiOutlineShareAlt size={30} />,
      number: 20,
      desc: "Memiliki",
    },
    {
      id: 2,
      icon: <AiOutlineShareAlt size={30} />,
      number: 108,
      desc: "Menggunakan",
    },
    {
      id: 3,
      icon: <AiOutlineShareAlt size={30} />,
      number: 67,
      desc: "Meminjam",
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
    <div className="tablet:flex-col">
      <div className="tablet:my-3 bg-white rounded-2xl tablet:p-2">
        {/* div 1 */}
        <div className="tablet:flex tablet:justify-around items-center">
          {/* div 2 */}
          <span className="font-bold">Akun Bank</span>
          <div>
            {/* div 3 */}
            <button className="bg-[#35763B] rounded-lg">
              <span className="text-white p-3">+ Tambah Akun Bank</span>
            </button>
          </div>
        </div>
        <div>
          {/* div 4 */}
          <div className="tablet:flex">
            {/* div 5 */}
            <ul>
              {bankAccount.map((items) => {
                return (
                  <li key={items.id} className="py-3">
                    <div className="flex gap-x-2">
                      <div className="flex items-center border-2 rounded-lg border-black">
                        {/* gambar visa */}
                        <img src={items.icon} alt="tes1" width={150} />
                      </div>
                      {/* div 6 */}
                      <div className="tablet:flex tablet:flex-col">
                        {/* div 7 */}
                        <div className="flex mobile:justify-between tablet:gap-x-2">
                          {/* div 8 */}
                          <span className="font-bold">{items.namaBank}</span>
                          <div className="flex items-center text-[#CF7871]">
                            <BiEditAlt />
                            <MdDelete />
                          </div>
                        </div>
                        <div className="mobile:flex mobile:flex-col">
                          {/* div 9 */}
                          <span>{items.user}</span>
                          <span>{items.currency}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl tablet:p-2 my-5">
        {/* div 1 */}
        <div className="flex justify-between px-3">
          {/* div 2  */}
          <span className="font-bold">Relasi</span>
          <span onClick={handleIsShow}>
            {isShow ? (
              <span>Sembunyikan</span>
            ) : (
              <span className="font-light">Lihat semua</span>
            )}
          </span>
        </div>
        <div>
          {/* div 3 */}
          <div className="flex flex-col">
            {/* div 4 */}
            {isShow
              ? relasi.map((items) => {
                  return (
                    <ul>
                      <li key={items.id}>
                        <div className="flex gap-x-3">
                          {/* div 5 */}
                          <div className="flex items-center">
                            {/* div icon */}
                            <span>{items.icon}</span>
                          </div>
                          <div className="flex flex-col">
                            {/* div 6 */}
                            <span className="font-bold text-xl">
                              {items.number}
                            </span>
                            <span className="font-light">{items.desc}</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bankrelasi;
