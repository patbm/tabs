import React, { useState } from "react";
import CardHotel from '../../../../components/card-hotel';
import OptionsMock from './options-mock';

const Tab1Content = () => {
    const [value, setValue] = useState('0');
    return (
            <div className='tab1'>
                <h1 className='tab1__title'><span className='tab1__title__caps'>Hotel</span> <span className='tab1__title__bold'>Mieres del camín apartamentos</span></h1>
                <ul className='tab1__list'>
                    {OptionsMock.map((opt, index) => (
                        <CardHotel key={index} data={opt} value={value} setValue={setValue} index={index}/>
                    ))}
                </ul>
            </div>
    )
}

export default Tab1Content;