import React, { useState, useEffect } from 'react';
import SelectMui from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';


const Select = (option) => {

    const [values, setValue] = useState({
        data:'',
        name:'carType',
    });    
    
    // store에서 받아와야함
    const _dataTemp =  { carType : { 1:'RG1', 2:'RG2', 3:'RG3', } };

    const _optionList = [];
    for (let [key, value] of Object.entries(_dataTemp.carType)) {        
        _optionList.push(<MenuItem value={key} key={key}>{ value }</MenuItem>); 
    }

        
    const handleChange = event =>{
        console.log(`'Select change value : '${event.target.value}' / ID(name) : '${event.target.name}`);
        // setValues(oldValues => ({
        //     ...oldValues,
        //     [event.target.name]: event.target.value,
        // }));
    }


    
    return (
        <SelectMui
            //value={values.age} // Native select 의 'id'
            value="TEST"
            onChange={(event)=> handleChange(event)}
            displayEmpty
            inputProps={{
                name: 'carType',
                id: 'carTypeCombo',
            }}
            //className={classes.selectEmpty}
            >
            { _optionList }
        </SelectMui>
    );
};
export default Select;


