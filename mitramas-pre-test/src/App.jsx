import Sidebars from "./Components/Sidebars";
import Header from "./Components/Header";
import CardProfileOffice from "./Components/Cards/CardProfileOffice";
import Lokasi from "./Components/Cards/CardLokasi";
import Bankrelasi from "./Components/Cards/CardBankRelasi";
import Aktivitas from "./Components/Cards/CardAktivitas";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebars />
        <div className="flex-1">
          <Header />
          <div className="mobile:flex mobile:flex-col mobile:justify-center tablet:justify-center tablet:flex-row tablet:gap-x-3 tablet:mx-5 pc:m-10 ">
            <CardProfileOffice />
            <div className="mobile:flex mobile:flex-col mobile:justify-evenly mobile:my-5 mobile:mx-5 tablet:m-0 tablet:w-full tablet:h-full">
              <Lokasi />
              <div className="my-5">
                <div className="tablet:flex tablet:w-full tablet:h-full tablet:gap-x-3">
                  <Bankrelasi />
                  <Aktivitas />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
