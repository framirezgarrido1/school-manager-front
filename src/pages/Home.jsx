import React, { useState } from 'react';
import '../css/App.css';

 /* Components */
 import Header from '../components/Header'  
 import Content from '../components/Content';

function Home() {

  const [page] = useState("Home")

  return (
    <div>
    <Header />
    <Content name={page} />
  </div>
  );
}

export default Home;
