import {useDispatch, useSelector} from "react-redux";
import {setDarkMode, setLanguage} from "../stores/site";

export default function Footer() {
  const {dark, language} = useSelector((state) => state.site);
  const languages = ["tr", "en"];

  const dispatch = useDispatch();

  return (
    <div className='bg-zinc-900 text-white p-3 flex justify-between'>
      <button onClick={() => dispatch(setDarkMode())}>
        {dark ? "Dark Mode" : "Light Mode"}
      </button>
      <div className='flex gap-2 text-lg'>
        {languages.map((lang, index) => (
          <button
            style={lang === language ? {opacity: 1} : {}}
            onClick={() => dispatch(setLanguage(lang))}
            className='bg-blue-500 w-7 h-7  grid place-items-center rounded-sm opacity-60 transition-colors'
            key={index}>
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}
