import { useSite } from "../context";

function SwitchLanguage() {
  const { language, dispatch } = useSite();
  const switchLanguage = () => {
    dispatch({
      type: "TOGGLE_LANGUAGE",
    });
  };
  return (
    <>
      <div>Mevcut dil ={language}</div>
      <button onClick={switchLanguage}>Dili değiştir</button>
    </>
  );
}

export default SwitchLanguage;
