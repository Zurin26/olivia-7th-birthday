import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React, {useEffect, useState} from "react";
import {via1, via2, via3, wildestDream} from "../assets";
import ConfirmationModal from "../components/Modals/ConfirmationModal";
export default function Home() {
  const [audio, SetAudio] = useState("");
  const [open, SetOpen] = useState(true);

  const Playit = () => {
    audio.currentTime = 0;
    audio.play();
    SetOpen(false);
  };
  const Stopit = () => {
    audio.pause();
  };
  useEffect(() => {
    SetAudio(new Audio(wildestDream));
    // setTimeout(() => {
    //   audio.currentTime = 0;
    //   audio.play();
    // }, 3000);
  }, []);
  // window.onload(new Audio(wildestDream).play());
  return (
    <div className='h-full w-full flex flex-col justify-center items-center bg-cream'>
      <ConfirmationModal
        open={open}
        setOpen={Playit}
        handleConfirm={Playit}
        title={"Welcome to Olivia's Birthday Party!"}
        message={"Are you ready?"}
      />
      <div class=' flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-[600px] mt-14'>
        <div class=' h-[800px] m-2.5 overflow-hidden text-white rounded-md'>
          <img
            // class='w-50 rounded-lg h-[800px]'
            className=''
            src={via1}
            alt='via1'
          />
        </div>
      </div>
      <div class=' flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-[600px] mt-20'>
        <div class=' h-[800px] m-2.5 overflow-hidden text-white rounded-md'>
          <img
            // class='w-50 rounded-lg h-[800px]'
            src={via2}
            alt='via1'
          />
        </div>
      </div>
      <div class=' flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-[600px] mt-20 mb-20'>
        <div class=' h-[800px] m-2.5 overflow-hidden text-white rounded-md'>
          <img
            // class='w-50 rounded-lg h-[800px]'
            src={via3}
            alt='via1'
          />
        </div>
      </div>
    </div>
  );
}
