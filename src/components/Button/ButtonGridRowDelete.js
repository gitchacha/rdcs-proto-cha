import React from 'react';
import PropTypes from 'prop-types';



const ButtonGridRowDelete = ({ label, handleDataRowDelete }) => {
    return (
        <button type="button" 
            className="grid__btn--rowDelete" 
            onClick={ handleDataRowDelete } 
            >{ label }
        </button>
    );
};


ButtonGridRowDelete.PropTypes = {
    label : PropTypes.string,
    onClick : PropTypes.func,
}

export default ButtonGridRowDelete;