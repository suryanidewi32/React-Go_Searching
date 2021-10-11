import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Tabs} from 'antd';
import Spinner from '../layout/spiner';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;


const PostApi = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const pit= props.match.params.tracecode
        const pitobject= {"tracecode": pit}
        axios.post('/search/tracecode', pitobject)
        .then(res => {
            console.log(res)  
            setUsers(res.data.payload.pit) 
        });
    }, []);

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const prt= props.match.params.tracecode
        const prtarray= {"tracecode": prt}
       axios.post('/search/tracecode', prtarray)
       .then(res => {
            console.log(res)  
            setDatas(res.data.payload.prt) 
        });
    }, []);

    if (
        users === undefined ||
        datas === undefined ||
        Object.keys(users).length === 0 ||
        Object.keys(datas).length === 0 
    ){
        return <Spinner />
    } else {
    
  
    return (
        <React.Fragment>
         <Link to="/" className="btn btn-dark btn-sm mb-4"> Go Back </Link>
        <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="Product Information" key="1">
        <table className="table">
            <thead>
                <tr>
                    <th className="text-center">Certagency</th>
                    <td>{users.certagency}</td>
                    </tr>
                    <tr>
                    <th className="text-center">Origin</th>
                    <td>{users.origin}</td>
                    </tr>
                    <tr>
                    <th className="text-center">Packing Date</th>
                    <td>{users.packingdate}</td>
                    </tr>
                    <tr>
                    <th className="text-center">Producer Name</th>
                    <td>{users.producername}</td>
                    </tr>
                    <tr>
                    <th className="text-center">Product Name</th>
                    <td>{users.productname}</td>
                    </tr>
                    <tr>
                    <th className="text-center">Product Operator</th>
                    <td>{users.productoperator}</td>
                   
                </tr>
            </thead>
        </table>
        </TabPane>

<TabPane tab="Production Record" key="2">
<table className="table table-bordered">
  <thead>
      <tr>
          <th className="text-center">Operation Date </th>
          <th className="text-center">Job Process </th>
          <th className="text-center">Job Detail </th>
          <th className="text-center">Remark </th>
      </tr>
  </thead>
  <tbody>
                 {
                     datas.map(data => (
                        <tr key={data.jobprocess}>
                            <td className="text-center">{data.jobdetail}</td>
                            <td className="text-center">{data.jobprocess}</td>
                            <td className="text-center">{data.operationdate}</td>
                            <td className="text-center">{data.remark}</td>
                        </tr>
                     ))    
                }
            </tbody>
</table>
</TabPane>



<TabPane tab="Recipe" key="3">
  Content of card tab 3
</TabPane>
</Tabs>
 </React.Fragment>
    );
}}

export default PostApi;