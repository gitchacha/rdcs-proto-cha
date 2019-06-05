import React from 'react';
import { Link } from 'react-router-dom';

const FrameLocalNavigationBar = () => {    

    const tempData = {
        trigger : {
            name : '트리거 조건 관리',
            menu : { list : '목록', update: '수정', create: '생성' }
        },
        collect : {
            name: '수집 룰 관리',
            menu : { list : '목록', update: '수정', create: '생성' },
        },  
        diagnosis : {
            name : '진단 룰 관리',
            menu : { list : '목록', update: '수정', create: '생성' },
        },
        error: {
            name : '수집 데이터 및 에러 조회',
            menu : { errorRaw : 'Raw data', errorParse: 'Parshing data'},
        },          
        mypage :{
            name: '마이페이지',
            menu: { 
                roleList : '내 권한조회', 
                roleLimit: 'limit 상향 신청',
                roleApproval: 'limit 승인 현황',
                ruleList: '내 룰 조회',
                realTime: '실시간 수집 현황',
                period: '기간별 필터',
            },
        },
    }

    // console.log(Object.entries(tempData));
    // console.log(Object.keys(tempData));
    // console.log(Object.values(tempData));
    let menulist = [];

    for ( let props in tempData ) {
        menulist.push(<h2 key={`${props}-heading`}>{ tempData[props].name }</h2>);        
        for ( let key in tempData[props].menu ) {
            menulist.push(<Link to={`/${props}/${key}`} key={`${props}-${key}`}>{ tempData[props].menu[key] }</Link>);
        }      
        
    }

    return (
        <section className="global-navigation">
            <h1>RDCS<span>(원격진단 수집)</span></h1>
            { menulist }
        </section>
    );
};

export default FrameLocalNavigationBar;