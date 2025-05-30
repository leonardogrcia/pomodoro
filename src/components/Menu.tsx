import { Clock1Icon, HomeIcon, MonitorCog } from "lucide-react";

const Menu = () => {
  return (
    <section className='flex justify-center items-center gap-3'>
      <button>
        <HomeIcon className='bg-green-400 rounded-lg w-16 h-16 p-2 ' />
      </button>
      <button>
        <Clock1Icon className='bg-green-400 rounded-lg w-16 h-16 p-2' />
      </button>
      <button>
        <MonitorCog className='bg-green-400 rounded-lg w-16 h-16 p-2' />
      </button>
    </section>
  );
};

export default Menu;
