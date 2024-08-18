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
          backgroundColor: '#fbf6e7',
          opacity: 0.7,
          borderRadius: '100%',
          width: '50px',
          height: '50px',
        }}
        component={<PiArrowCircleUpBold size={30} color="orange" />}
      />
    </div>
  );
};

export default ScrollButton;
