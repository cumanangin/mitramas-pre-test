import React from "react";

const Aktivitas = () => {
  const logAktivitas = [
    {
      id: 1,
      news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque laborum eius esse nesciunt pariatur doloremque!",
      date: "Hari ini, 06:00",
    },
    {
      id: 2,
      news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque laborum eius esse nesciunt pariatur doloremque!",
      date: "Kemarin, 17:32",
    },
    {
      id: 3,
      news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque laborum eius esse nesciunt pariatur doloremque!",
      date: "Kemarin, 17:32",
    },
  ];

  return (
    <div className="tablet:flex bg-white tablet:w-[50%] tablet:h-full rounded-2xl tablet:p-2 my-3">
      <div>
        {/* div 1 */}
        <div className="flex mobile:justify-center tablet:justify-start items-center">
          {/* div 2 */}
          <span className="font-bold">Aktivitas</span>
        </div>
        <div>
          {/* div 3 */}
          {logAktivitas.map((items) => {
            return (
              <ul>
                <li key={items.id} className="py-2">
                  <div className="flex flex-col px-2">
                    {/* div 4 */}
                    <span className="font-medium tablet:pb-1">
                      {items.news}
                    </span>
                    <span className="font-light">{items.date}</span>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Aktivitas;
