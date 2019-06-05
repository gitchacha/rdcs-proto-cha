import React from 'react';
import PropTypes from 'prop-types';



const ButtonGridRowCopy = ({ label, disabled, handleDataRowCopy, handleUiTooltip }) => {
    return (
        <button type="button" 
            disabled={ disabled }
            className="grid__btn--rowCopy" 
            onClick={ handleDataRowCopy } 
            onMouseEnter={ handleUiTooltip }
            >{ label }
        </button>
    );
};


ButtonGridRowCopy.PropTypes = {
    label : PropTypes.string,
    onClick : PropTypes.func,
}

export default ButtonGridRowCopy;