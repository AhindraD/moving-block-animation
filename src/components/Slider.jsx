import React from 'react'

import { useContext } from 'react';
import PositionContext from '../contexts/PositionContext';

export default function Slider() {
    let { xPos, setXPos, yPos, setYPos, rotate, setRotate } = useContext(PositionContext);

    return (
        <div className='slider-cont'>
            <p>X({xPos}px):</p>
            <input type="range" min="0" max="300" onChange={(e) => {
                setXPos(() => e.target.value)
            }} />
            <br />
            <br />
            <p>Y({yPos}px):</p>
            <input type="range" min="0" max="300" onChange={(e) => {
                setYPos(() => e.target.value)
            }} />
            <br />
            <br />
            <p>Rotate({rotate}deg):</p>
            <input type="range" min="-90" max="90" onChange={(e) => {
                setRotate(() => e.target.value)
            }} />
        </div>
    )
}
