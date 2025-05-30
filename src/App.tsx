import CountDown from "./components/CountDown";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import ButtonPlay from "./components/PlayButton";

const App = () => {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-[#0d1b2a] via-[#0f172a] to-[#000000]'>
      <div className='flex-grow flex flex-col gap-6'>
        <Logo />
        <Menu />
        <CountDown />
        <ButtonPlay />
      </div>
      <Footer />
    </div>
  );
};

export default App;
