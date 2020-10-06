import React, { useState,useEffect } from 'react';
import '../pages/Tab1.css';
import Dibujo from './Dibujo';
import Barra from './Barra';
const Rio: React.FC = () => {
   return (
              <div id="rio">
              <Barra></Barra>
              <Dibujo></Dibujo>
              </div>
        );
      };

export default Rio
