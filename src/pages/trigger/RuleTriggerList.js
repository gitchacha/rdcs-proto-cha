
import React, { Component } from 'react';
import Select from 'components/Forms/Select';
import DataTables from 'components/Tables/DataTables';
import { observable, action, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject("triggerStore")
@observer
class RuleTriggerList extends Component {

    constructor(props) {
      super(props);
      console.log("this.props",this.props);
      console.log("this.state",this.state);
    }

    componentDidMount() {
        const { triggerStore } = this.props;

        
        console.log("triggerStore.triggerList", triggerStore.triggerList);
        console.log( 'toJS(triggerList)' , toJS(triggerStore.triggerList) );
        
        triggerStore.getTriggerList();

        
        


    }

    
    render() {
        
        const { triggerList }  = this.props.triggerStore;        

        

        // console.log("???triggerList",triggerList[0].carType, triggerList[0].createdTime);

        triggerList.forEach( (item,idx)=>{
            console.log( "item , idx ", item.carType, item,idx);
        });
        return (
            <div>
                <Select />
                <DataTables />
            </div>
        );
    }
}

export default RuleTriggerList;