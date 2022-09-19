import CounterActions from "./components/CounterActions";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=' w-full flex flex-col'>
      <Header />
      <div className='flex-1 flex justify-center pt-10 items-start'>
        <CounterActions />
      </div>
      <Footer />
    </div>
  );
}

export default App;
