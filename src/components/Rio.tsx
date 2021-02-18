import React, { useState,useEffect } from 'react';
import '../pages/Tab1.css';
import Dibujo from './Dibujo';
import Barra from './Barra';
const Rio: React.FC = () => {
   return (
         <>
            <div style={{background:"#ffffff",textAlign:"center"}}>
            <h2 style={{marginLeft:"8px"}}>Estado del Rio Areco</h2> 
            </div>
             
              <div id="rio">
              <Barra></Barra>
              <Dibujo></Dibujo>
              </div>
              </>
        );
      };

export default Rio
