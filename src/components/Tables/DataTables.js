import React, {Component } from "react";
import MUIDataTable from "mui-datatables";
import { observer, inject } from 'mobx-react';



@inject("triggerStore")
class DataTables extends Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }

  render() {
    const { dataList } = this.props;

    console.log( "@@@@@@this.props",this.props );
    console.log("dataList",dataList);

    const columns = [
        { label: "트리거", name: "triggerName" },
        { label: "트리거 ID", name: "triggerId" }, 
        { label: "생성일시",  name: "createdTime" }, 
        { label: "관리", name: "" }
      ];
      const data = dataList;
    //   const data = [
    //     {name: "Gabby George", title: "Business Analyst", location: "Minneapolis", age: 30, salary: "$100,000"}      
    //   ];

    const options = {
      filterType: "dropdown",
      responsive: "scroll"
    };

    return (
      <MUIDataTable
        title={"트리거 조건관리"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}
export default DataTables;
