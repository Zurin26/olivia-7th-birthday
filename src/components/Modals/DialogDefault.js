import React from "react";
import {Dialog} from "@material-tailwind/react";

export function DialogDefault({size = "sm", open, setOpen, children}) {
  return (
    <Dialog
      size={size}
      open={open}
      handler={setOpen}
    >
      {children}
    </Dialog>
  );
}
