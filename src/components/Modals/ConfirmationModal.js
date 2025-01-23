import React from "react";
import {DialogDefault} from "./DialogDefault";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

export default function ConfirmationModal({
  open,
  setOpen,
  title,
  message,
  handleConfirm,
  loading,
}) {
  return (
    <>
      <Dialog
        open={open}
        handler={setOpen}
      >
        <DialogHeader className='w-full items-center justify-center text-center bg-pink text-white'>
          {title}
        </DialogHeader>
        <DialogBody className='w-full items-center justify-center text-center bg-pink text-white'>
          {message}
        </DialogBody>
        <DialogFooter className='w-full items-center justify-center bg-lightred'>
          <Button
            variant='outlined'
            onClick={setOpen}
            className='mr-2 items-center text-white border-white'
          >
            <span>Let's get started!</span>
          </Button>
          {/* <Button
            disabled={loading}
            loading={loading}
            variant='gradient'
            onClick={handleConfirm}
          >
            <span>Confirm</span>
          </Button> */}
        </DialogFooter>
      </Dialog>
    </>
  );
}
