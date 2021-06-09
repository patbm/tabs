import React, { useState } from "react";
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
                <label className="radio-button__label" for={id}>{label}</label>
            </div>
                    
    )
}

RadioButon.propTypes = {
    // data: PropTypes.shape().isRequired(),
    // active: PropTypes.bool.isRequired(),
    // handleOnClick: PropTypes.func.isRequired,
}

RadioButon.defaultProps = {
}

export default RadioButon;