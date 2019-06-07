
import React, { Component, useState } from 'react';
import Select from 'components/Forms/Select';
import DataTables from 'components/Tables/DataTables';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';


@inject("triggerStore")
@observer
class RuleTriggerList extends Component { 
    
    constructor(props){ 
        super(props);
    };


    componentDidMount() {
        const { triggerStore } = this.props;
        triggerStore.getTriggerList();
    };

    
    
    render() {
        const { triggerList }  = this.props.triggerStore;    


        triggerList.map((value,idx) => {            
            console.log(`object entries[${idx}] : ${Object.entries(value)}`);
            console.log(`object keys[${idx}] : ${Object.keys(value)}`);
            console.log(`object values[${idx}] : ${Object.values(value)}`);
            
        });

        triggerList.forEach( (item,idx)=>{
            console.log( "item , idx ", item, item,idx);

            let abc = Object.assign({}, item, {
                triggerName: '수식보기'
            });

            console.log(Object.keys(abc));

            console.log(`'새객체 '${abc.triggerName} / ${abc.triggerId} `);
            // item = { ...item, 'triggerName': '수식보기'};
        });

        // Object.assign({}, state, {
        //     number: state.number - action.diff
        // })  
        return (
            <div>
                <Select />
                <DataTables dataList={triggerList} />
            </div>
        );
    }
}

export default RuleTriggerList;