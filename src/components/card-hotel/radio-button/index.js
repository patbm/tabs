import React from "react";
import PropTypes from 'prop-types';

const RadioButon = ({ value, setValue, id, label, ...rest }) => {
    return (
           <div className="radio-button">
                <input
                    type="radio"
                    value={value}
                    id={id}
                    onChange={(event) => setValue(event.target.value)}
                    {...rest}/>
                <label className="radio-button__label" htmlFor={id}>{label}</label>
            </div>
                    
    )
}

RadioButon.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default RadioButon;