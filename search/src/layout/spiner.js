import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'antd';

const Api = (props) => {
 

  return(
   

    <Card
      style={{ marginTop: 16 , backgroundColor: 'red'}}
      type="inner"
      title="Data Not Found"
      extra={<a href="/">Exit</a>}
    >
      Tracecode : Not Found
    </Card>

  )


  
}

export default Api;


