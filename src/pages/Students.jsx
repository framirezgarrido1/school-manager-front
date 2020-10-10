import React, { useState, useEffect } from 'react';
import '../css/App.css';

 /* Components */
 import Header from '../components/Header'  
 import ContentData from '../components/ContentData';

function Students() {


  return (
    <div>
      <Header />
      <ContentData/>
    </div>
  );
}

export default Students;
