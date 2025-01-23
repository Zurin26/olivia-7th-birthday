import React from "react";
import {StickyNavbar} from "../Header/StickyNavbar";

export default function MainContainer({children}) {
  return (
    <div className='w-full'>
      {/* <div className='flex flex-1 flex-col pt-6 px-6'> */}
      {/* <StickyNavbar /> */}
      {/* <div className='h-screen flex flex-1 flex-grow w-full overflow-y-auto'> */}
      {children}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
