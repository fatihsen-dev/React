import { useContext } from "react";
import SiteContext from "../context/SiteContext";

function SwitchTheme() {
  const { theme, setTheme } = useContext(SiteContext);

  return (
    <>
      <div>Mevcut tema ={theme}</div>
      <button onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
        Temayı değiştir
      </button>
    </>
  );
}

export default SwitchTheme;
