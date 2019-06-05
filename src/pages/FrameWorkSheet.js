import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import { 
    RuleTriggerList, RuleTriggerUpdate, RuleTriggerCreate,
    RuleCollectList, RuleCollectUpdate, RuleCollectCreate,
} from 'pages'; 


class WorkSheet extends Component {
    render() {
        return (
            <Box className="work-sheet" component="section">
                <Route exact path={["/", "/trigger/list"]} component={RuleTriggerList}/>
                <Route path="/trigger-update" component={RuleTriggerUpdate}/>
                <Route path="/trigger-create" component={RuleTriggerCreate}/>
                <Route path="/collect-list" component={RuleCollectList}/>
                <Route path="/collect-update" component={RuleCollectUpdate}/>
                <Route path="/collect-create" component={RuleCollectCreate}/>
            </Box>
        );
    }
}

export default WorkSheet;