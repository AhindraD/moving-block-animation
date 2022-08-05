import React from 'react'

export default function Slider() {
    return (
        <div className='slider-cont'>
            <p>X():</p>
            <input type="range" min="1" max="100" />
            <br />
            <p>Y():</p>
            <input type="range" min="1" max="100" />
            <br />
            <p>Rotate():</p>
            <input type="range" min="1" max="100" />
        </div>
    )
}
