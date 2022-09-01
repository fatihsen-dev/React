import { useSite } from "../context";

function SwitchTheme() {
  const { theme, dispatch } = useSite();
  const switchTheme = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };
  return (
    <>
      <div>Mevcut tema ={theme}</div>
      <button onClick={switchTheme}>Temayı değiştir</button>
    </>
  );
}

export default SwitchTheme;
