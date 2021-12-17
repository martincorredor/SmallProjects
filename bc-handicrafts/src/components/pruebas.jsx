import { useState, useEffect } from 'react';



const Prueba = (props) => {
    const { height, width } = props.windowData;

    const [nane, setNane] = useState(true);

    function soyNane(){
      if (width < 600) {
        setNane(false)
      } else {
        setNane(true)
      }
    }
    
  
    return (
      <div>
        {nane ? <div>Soy nane</div> : <div>Toy chikito</div> }
        width: {width} ~ height: {height}
      </div>
    );
  }

  export default Prueba;