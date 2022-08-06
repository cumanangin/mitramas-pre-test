import Sidebars from "./Components/Sidebars";
import Header from "./Components/Header";
import CardProfileOffice from "./Components/Cards/CardProfileOffice";
import Lokasi from "./Components/Cards/CardLokasi";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebars />
        <div className="flex-1">
          <Header />
          <div className="mobile:flex mobile:flex-col mobile:justify-center tablet:justify-start tablet:flex-row tablet:gap-x-3 tablet:mx-5 pc:mx-10">
            <CardProfileOffice />
            <div className="mobile:flex mobile:flex-col mobile:my-5 tablet:m-0">
              <Lokasi />
              <div className="flex bg-slate-500">
                <div className="flex-col">
                  <div>akun bank</div>
                  <div>relasi</div>
                </div>
                <div className="flex bg-emerald-700">Aktivitas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
