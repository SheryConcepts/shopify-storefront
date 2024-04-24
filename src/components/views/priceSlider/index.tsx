import React from 'react';
import Slider from "react-slider";

const PriceSlider = ({ minValue, maxValue, value, onChange }: any) => {

    return (
        <div className="flex items-center space-x-4">

            <div className='w-56 '>
                <Slider
                    min={minValue}
                    max={maxValue}
                    value={value}
                    onChange={onChange} 
                    // renderTrack={(props, state) => <div {...props} />}
                    className="w-full  rounded-md "                   
                    thumbClassName="h-4 -mt-1.5 w-4 bg-white rounded-full border border-black "
                    thumbActiveClassName='outline-none'
                     trackClassName="h-0.5 bg-gray-400 rounded-md"                              
                />

            </div>
        </div>
    );
};

export default PriceSlider;
