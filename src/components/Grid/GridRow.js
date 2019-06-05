import React, { Component } from 'react';
import PropTypes from 'prop-types';




class GridRow extends Component {
    state = {
        data:[
            {
                "group": "Parameter",
                "type": "String",
                "optional": false,
                "field": "response_type",
                "description": "<p>(Mandatory) 인증 과정에 대한 내부 구분값으로 'code'로 전송해야 함</p>"
              },
              {
                "group": "Parameter",
                "type": "String",
                "optional": false,
                "field": "client_id",
                "description": "<p>(Mandatory) 애플리케이션 등록 시 발급받은 Client ID 값</p>"
              },
        ],
    }

    static PropTypes = {

    }


    render() {
        // API 권한 받으면 재확인, Object.entries + map으로 작성
        const rowList = this.state.data.map(
            (data,idx)=> {
                <td key={idx} onDoubleClick={()=>this.handleRemove(idx)}>
                    {name}
                </td>
            }
        );

        return (
            <tr>{ rowList }</tr>
        );
    }
}

export default GridRow;