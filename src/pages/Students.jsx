import React, { useState } from 'react';
import '../css/App.css';

 /* Components */
 import Header from '../components/Header'  
 import ContentData from '../components/ContentData';

function Students(props) {

  const { match: { params } } = props;
  const [level] = useState(params.level)


  return (
    <div>
      <Header />
      <ContentData level={level}/>
    </div>
  );
}

export default Students;
