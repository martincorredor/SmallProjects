import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from './components/Header';
import Prueba from './components/pruebas';
import { useEffect } from 'react';
import { useState } from 'react';

/*================================== Functions to get user window dimentions =====================================*/
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

/*============================  Default Component to RENDER ======================================*/
const App = () => {
  const windowData = useWindowDimensions();
  const screens = {
    isDesktopOrLaptop: useMediaQuery({ query: '(min-width: 1024px)' }),
    isLongScreen: useMediaQuery({ query: '(min-width: 650px)' }),
    isTablet: useMediaQuery({ query: '(max-width: 1023px)' }),
    isMobile: useMediaQuery({ query: '(max-width: 376px)' }),
    isPortrait: useMediaQuery({ query: '(orientation: portrait)' }),
    isRetina: useMediaQuery({ query: '(min-resolution: 2dppx)' }),
  };

  return (
    <div>
      {/*<Prueba windowData={windowData} screens={screens} />*/}
      <Header screens={screens}/>
    </div>
  );
};

export default App;
