import React, { useEffect, useState } from 'react';

import ryu from './assets/img/ryu.png';
import ryuPunch from './assets/img/ryu-punch.png';
import ryuDefense from './assets/img/ryu-defense.png';
import ryuBeated from './assets/img/ryu-beated.png';

import ken from './assets/img/ken.png';
import kenPunch from './assets/img/ken-punch.png';
import kenDefense from './assets/img/ken-defense.png';
import kenBeated from './assets/img/ken-beated.png';

import attack from './assets/img/punch.png';
import defense from './assets/img/defense.png';

import './App.css';

const App = () => {

  const [r, setR] = useState(0);
  const [k, setK] = useState(0);

  useEffect(() => { // Ryu User

    if(Math.floor(((Math.random()*100)+1)%3) == 0){
      setK(1);
    }
    
    if(r == 1){ // Batendo

      if(Math.floor(((Math.random()*100)+1)%7) == 0){
        setK(1);
      }

      let x = 0;

      document.getElementById("ryu").classList.add("big");
      document.getElementById("ryu").setAttribute("src", ryuPunch);

      if(r == 1 && k == 0){
        
        document.getElementById("ken").setAttribute("src", kenBeated);

        document.getElementById("ken").classList.add("medium");

        x = 1;

      }

      setTimeout(() => {

        document.getElementById("ryu").classList.remove("big");
        document.getElementById("ryu").setAttribute("src", ryu);
        setR(0);

        if(x == 1){

          document.getElementById("ken").setAttribute("src", ken);

          document.getElementById("ken").classList.remove("medium");

        }

        setR(0);

      }, 100);

    }
    else if(r == 2){ // Defendendo

      document.getElementById("ryu").classList.add("medium");
      document.getElementById("ryu").setAttribute("src", ryuDefense);

    }
    else{
      document.getElementById("ryu").classList.remove("medium");
      document.getElementById("ryu").classList.remove("big");
      document.getElementById("ryu").setAttribute("src", ryu);
    }    

  },[r]);

  const punchR = () => {

    if(Math.floor(((Math.random()*100)+1)%3) == 0){
      setK(2);
    }

    setR(1);

  }

  const blockR = () => {

    setR(2);

  }

  const unblockR = () => {
    
    setR(0);    

  }

  useEffect(() => { // Ken CPU  

    if(k == 1){ // Batendo

      let x = 0;

      document.getElementById("ken").classList.add("big");
      document.getElementById("ken").setAttribute("src", kenPunch);

      if(k == 1 && r == 0){
        
        document.getElementById("ryu").setAttribute("src", ryuBeated);

        x = 1;

      }

      setTimeout(() => {

        document.getElementById("ken").classList.remove("big");
        document.getElementById("ken").setAttribute("src", ken);        

        if(x == 1){

          document.getElementById("ryu").setAttribute("src", ryu);

        }        

      }, 100);

      setK(0);

    }
    else if(k == 2){ // Defendendo

      document.getElementById("ken").setAttribute("src", kenDefense);

      setTimeout(unblockK, 800);

    }

  }, [k]);

  const unblockK = () => {
    
    setK(0);

  }

  return(
    
    <div className="container">

      <div className="icons">

        <div className="attackIcon" onClick={punchR}>

          <img draggable="false" src={attack} className="attack" alt="Attack" />

        </div>

        <div className="defenseIcon" onMouseDown={blockR} onMouseUp={unblockR} onMouseLeave={unblockR} onTouchStart={blockR} onTouchEnd={unblockR}>

          <img draggable="false" src={defense} className="defense" alt="Defense" />

        </div>

      </div>
      
      <div className="area">

        <img id="ryu" draggable="false" src={ryu} className="Ryu" alt="Ryu" />

        <img id="ken" draggable="false" src={ken} className="Ken" alt="Ken" />

      </div>

    </div>

  );

}

export default App;
