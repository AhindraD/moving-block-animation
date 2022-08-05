import React from 'react'

import { useContext } from 'react';
import PositionContext from '../contexts/PositionContext';

export default function Slider() {
    let { xPos, setXPos, yPos, setYPos, rotate, setRotate } = useContext(PositionContext);

    return (
        <div className='slider-cont'>
            <p>X():</p>
            <input type="range" min="1" max="100" />
            <br />
            <br />
            <p>Y():</p>
            <input type="range" min="1" max="100" />
            <br />
            <br />
            <p>Rotate():</p>
            <input type="range" min="-90" max="90" />
        </div>
    )
}
