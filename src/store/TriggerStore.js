import { observable, action, computed, configure , toJS } from 'mobx';
import axios from 'axios';

configure({ enforceActions: true }); //잘모름

export default class TriggerStore {

    @observable triggerList = [];
    @observable selectedTrigger  = {};
    @observable carType;

    @action 
    setTriggerList = (triggers) => { 
        console.log('triggers',triggers);
        console.log("this.triggerList->>>-->",this.triggerList);
        this.triggerList = triggers; 
        
        console.log("this.triggerList--->",this.triggerList); 

        const _data = toJS(this.triggerList);

        console.log(_data);

        _data.map((value,idx) => {            
            console.log(`object entries[${idx}] : ${Object.entries(value)}`);
            console.log(`object keys[${idx}] : ${Object.keys(value)}`);
            console.log(`object values[${idx}] : ${Object.keys(value)}`);
            
        });
    };

    @action getTriggerList = () => {
        // axios.get('http://localhost:3001/trigger/', { params:{ carType: 'rg1'}})
        //   .then(response => {
        //     console.log("responseresponse__",response);
        //     console.log("responseresponse__data",response.data);
        //     this.setTriggerList(response.data);
        //   })
        //   .catch(error=> {
        //     console.log(error);
        //   });

          axios({
            method : 'get',
            url : 'http://localhost:3001/trigger?carType=rg1',
            data : '',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            withCredentials: true,
            timeout: 5000,
            //...config
        }).then(
            response => {
                
                console.log("responseresponse__",response);
                console.log("responseresponse__datdddda",response.data);
                this.setTriggerList(response.data);
                //return response;
            }
        ).catch(
            error => {
                throw error;
            }
        );





    }





}