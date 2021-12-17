import React from 'react';
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
  return (
    <div>
      <Prueba windowData={windowData} />
      <Header />
    </div>
  );
};

export default App;
