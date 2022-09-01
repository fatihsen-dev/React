import { useContext } from "react";
import SiteContext from "../context/SiteContext";

function SwitchLanguage() {
  const { language, setLanguage } = useContext(SiteContext);
  return (
    <>
      <div>Mevcut dil ={language}</div>
      <button onClick={() => setLanguage(language == "tr" ? "en" : "tr")}>
        Temayı değiştir
      </button>
    </>
  );
}

export default SwitchLanguage;
