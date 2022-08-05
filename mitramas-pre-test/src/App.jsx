import Sidebars from "./Components/Sidebars";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebars />
        <div className="flex-1">
          <Header />
          tes
        </div>
      </div>
    </>
  );
}

export default App;
