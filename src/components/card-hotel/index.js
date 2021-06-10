import React from "react";
import PropTypes from 'prop-types';
import RadioButton from './radio-button';

const CardHotel = ({ data, value, setValue, index }) => {
    return (
            <div
                className={`card-hotel ${value === `${index}` ? ' card-hotel--active' : ''}`}
            >
                {data && (
                    <>
                        <div>
                            <h2 className="card-hotel__title">{data.title}</h2>
                            <hr className="card-hotel__line"/>
                            <ul className="card-hotel__list">
                                {data.options.map((opt, index) => (
                                    <li key={index} className="card-hotel__list__item">
                                        <p>{opt}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            className={`card-hotel__radio-button ${value === `${index}` ? ' card-hotel__radio-button--active' : ''}`}
                            onClick={() => setValue(`${index}`)}
                        >
                            <RadioButton value={`${index}`} id={`radio-${index}`} name="radio-group" checked={value === `${index}`} setValue={setValue} label="Elegir régimen"/>
                        </div>
                    </>
                )}
            </div>
    )
}

CardHotel.propTypes = {
    data: PropTypes.shape().isRequired,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
}

export default CardHotel;