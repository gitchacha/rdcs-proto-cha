import { observable, action, computed, configure } from 'mobx';
import axios from 'axios';

//configure({ enforceActions: true }); //잘모름

export default class TriggerStore {

    @observable triggerList = [];
    @observable selectedTrigger  = {};
    @observable carType;

    @action 
    setTriggerList = (triggers) => { 
        this.triggerList = triggers; 
        console.log('triggers',triggers);
        console.log("this.triggerList->>>-->",this.triggerList);

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
            url : 'http://localhost:3001/trigger',
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
            }
        ).catch(
            error => {
                throw error;
            }
        );
        console.log(`getTriggerList : ${this.triggerList}`);
    }


}