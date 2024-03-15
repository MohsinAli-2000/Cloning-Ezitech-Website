import "./index.css";
import Topbar from "./Topbar.jsx";
import NaVbar from "./NaVbar.jsx";
import Header from "./Header.jsx";
function App() {
  return (
    <>
    <Topbar/>
    <NaVbar/>
    <Header/>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
    </>
  );
}

export default App;
