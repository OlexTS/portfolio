import ScrollToTop from 'react-scroll-to-top';
import { PiArrowCircleUpBold } from "react-icons/pi";

import React from 'react';

const ScrollButton = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        top={400}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          borderRadius: '100%',
          width: '60px',
          height: '60px',
        }}
        component={<PiArrowCircleUpBold size={40} color="orange" />}
      />
    </div>
  );
};

export default ScrollButton;
