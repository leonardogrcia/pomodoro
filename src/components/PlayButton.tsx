import { PlayIcon } from "lucide-react";

const ButtonPlay = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <button className='flex flex-col justify-center items-center bg-green-400 p-4 rounded-lg w-64'>
        <PlayIcon />
      </button>
    </div>
  );
};

export default ButtonPlay;
