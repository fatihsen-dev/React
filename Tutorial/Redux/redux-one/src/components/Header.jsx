import {useSelector} from "react-redux";

export default function Header() {
  const {dark, language} = useSelector((state) => state.site);

  return (
    <div className='flex bg-zinc-900 text-white p-3 w-full shadow-xl items-center justify-between'>
      <h1 className='text-2xl font-medium'>Header</h1>
      <div className='flex flex-col line leading-[18px]'>
        <span>Dark mod = {dark ? "Evet" : "Hayır"}</span>
        <span>Mevcut dil = {language}</span>
      </div>
    </div>
  );
}
