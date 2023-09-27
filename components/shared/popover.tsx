import React from 'react';
import MuiPopover, { PopoverProps } from '@mui/material/Popover';
import { Fade } from '@mui/material';

function Popover({
  onMouseEnterPaper,
  onMouseLeavePaper,
  ...props
}: PopoverProps & {
  onMouseEnterPaper?: () => void;
  onMouseLeavePaper?: () => void;
}) {
  return (
    <MuiPopover
      transformOrigin={{
        vertical: -10,
        horizontal: 'center',
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      sx={{
        boxShadow: 'none',
        pointerEvents: 'none',
      }}
      slotProps={{
        paper: {
          className: `popover-paper`,
          onMouseEnter: onMouseEnterPaper,
          onMouseLeave: onMouseLeavePaper,
        },
      }}
      TransitionComponent={Fade}
      {...props}
    >
      {props.children}
    </MuiPopover>
  );
}

export default Popover;
