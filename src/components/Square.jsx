import React from 'react';

import { useContext } from 'react';
import PositionContext from '../contexts/PositionContext';

export default function Square() {
    let { xPos, setXPos, yPos, setYPos, rotate, setRotate } = useContext(PositionContext);
    
    return (
        <div className='square-cont'>
            <section className='object'></section>
        </div>
    )
}