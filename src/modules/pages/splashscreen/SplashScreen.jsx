import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TxtSplashScreen } from '../../assets/text/splashscreen';
import placeholder from '../../assets/icons/placeholder.png';

export default function SplashScreen({ onDone }) {
  const [isClicked, setState] = useState(false);
  const handleClick = () => {
    setState(true);
    setTimeout(() => {
      onDone(); // tell App to show the rest
    }, 300); // give a little time for fade animation (optional)
  };

  return (
    <div
      style={{ display: isClicked ? 'none' : 'flex' }}
      className="flex flex-col h-screen w-screen justify-center items-center z-[999] font-saira "
    >
      <div className="flex justify-center gap-y-1 ">
        <p className="text-3xl md:text-7xl lg:text-8xl xl:text-9xl">{TxtSplashScreen.greeting}</p>
        <p>&nbsp;&nbsp;</p>
        <p className="text-3xl md:text-7xl lg:text-8xl xl:text-9xl">{TxtSplashScreen.name}</p>
      </div>
      <div className="flex p-3 justify-center gap-y-1">
        <p className="font-light text-center lg:text-2xl xl:text-3xl">{TxtSplashScreen.role}</p>
      </div>
      <div className="flex p-2 justify-center gap-x-3 gap-y-1">
        <img src={placeholder} alt="Github" />
        <img src={placeholder} alt="LinkedIn" />
        <img src={placeholder} alt="Github" />
      </div>
      <Link to="/home">
        <button className="m-6 p-4 text-center border-1 rounded-2xl" onClick={handleClick}>
          {' '}
          View More{' '}
        </button>
      </Link>
    </div>
  );
}
