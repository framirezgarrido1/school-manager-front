import React, { useState } from 'react';
import '../css/App.css';

 /* Components */
 import Header from '../components/Header'  
 import HomeData from '../components/HomeData';

function Home() {

  let schooldata = {
    rol: 'Profesor',
    username: 'Fernando Ramírez Garrido', 
    schoolname: 'Escuela Particular Ejército de Salvación'
  }

  const [page] = useState("Gestion de escuelas")
  const [schoolData] = useState(schooldata)

  return (
    <div>
    <Header />
    <HomeData name={page} schooldata={schoolData} />
  </div>
  );
}

export default Home;
