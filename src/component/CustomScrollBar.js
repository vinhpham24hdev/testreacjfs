import React from 'react';
import { Scrollbars } from "react-custom-scrollbars";

const CustomScrollbars = ({
  onScroll,
  onScrollFrame,
  onScrollStar,
  onScrollStop,
  onUpdate,
}) => {
  return (
    <Scrollbars
      onScroll={onScroll}
      onScrollFrame={onScrollFrame}
      onScrollStar={onScrollStar}
      onScrollStop={onScrollStop}
      onUpdate={onUpdate}
    />
  );
};

export default CustomScrollbars;
