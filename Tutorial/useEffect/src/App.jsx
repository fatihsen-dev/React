import UseEffectText from "./components/UseEffectText";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className='flex justify-center h-full bg-neutral-900'>
      <div className='container h-full flex flex-col items-center py-6'>
        <UseEffectText />
      </div>
      <Toaster position='bottom-left' reverseOrder={false} />
    </div>
  );
}

export default App;
