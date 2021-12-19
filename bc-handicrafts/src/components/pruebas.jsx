import React from 'react';


const Prueba = (props) => {
  

  return (
    <div>
      <h1>Device Test!</h1>
      {props.screens.isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
      {props.screens.isTablet && <p>You have a table</p>}
      {props.screens.isMobile && <p>You are a mobile phone</p>}
      <p>Your are in {props.screens.isPortrait ? 'portrait' : 'landscape'} orientation</p>
      {props.screens.isRetina && <p>You are retina</p>}
    </div>
  );
};

export default Prueba;
