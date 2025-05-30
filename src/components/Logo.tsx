import { TimerIcon } from "lucide-react";

const Logo = () => {
  return (
    <div className='flex justify-center items-center mt-16 hover:opacity-75'>
      <section className='flex flex-col justify-center items-center'>
        <TimerIcon className='w-16 h-16 text-white' />
        <h1 className='font-bold text-6xl text-white'>Chronos</h1>
      </section>
    </div>
  );
};

export default Logo;
