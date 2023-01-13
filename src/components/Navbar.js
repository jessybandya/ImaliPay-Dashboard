import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const date = new Date;
let hours = date.getHours();

  let status = (hours < 12)? "Good Morning" : (hours >= 12 && hours < 16)? "Good Afternoon" : (hours >= 16 && hours < 19)? "Good Evening" : (hours >= 19 && hours < 12)? "Good Night" : ((hours <= 12 && hours >= 12 ) ? "Good Morning" : "Good Night");

  return (
    <div className="flex p-2 bg-white dark:bg-transparent Navbar dark:border-none">
    <div style={{display:'flex',alignItems:'center'}}>
    <NavButton customFunc={handleActiveMenu} icon={<AiOutlineMenu  className='dark:text-white nav-bar-button'/>} />
       <div>
       <span>
       <p className="text-black-200 font-bold dark:text-white mt-2">
       {status}, Alex
     </p>
       </span>
       <span>
       <p className="text-gray-400 dark:text-gray-400 desc">
       Here's what's going on with your account
     </p>
       </span>
       </div>
    </div>
      <div className="flex rightNavSide">
        <NavButton title="Notification" dotColor="red" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg mr-10"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src="https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg"
              alt="user-profile"
            />
            <div style={{display:'block'}}>
            <div className='flex items-center'>
            <p>
            <span className="text-[#000]-400 font-bold dark:text-white text-14">
              Alex
            </span>
          </p>
          <MdKeyboardArrowDown className="text-[#000]-400 font-bold dark:text-white text-30" />
            </div>
            <div className="text-gray-400 text-14">Vendor ID:12345</div>
            </div>
          </div>
        </TooltipComponent>
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  );
};

export default Navbar;
