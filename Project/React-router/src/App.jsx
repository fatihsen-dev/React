import "./index.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Sidebar from "./components/main/Sidebar";
import Anasayfa from "./components/main/Anasayfa";
import Akis from "./components/main/Akis";
import Kesfet from "./components/main/Kesfet";
import Makaleler from "./components/main/Makaleler";
import SoruCevap from "./components/main/SoruCevap";
import DersIstekleri from "./components/main/DersIstekleri";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Anasayfa />} />
          <Route path='akis' element={<Akis />} />
          <Route path='kesfet' element={<Kesfet />} />
          <Route path='makaleler' element={<Makaleler />} />
          <Route path='soru-cevap' element={<SoruCevap />} />
          <Route path='ders-istekleri' element={<DersIstekleri />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
