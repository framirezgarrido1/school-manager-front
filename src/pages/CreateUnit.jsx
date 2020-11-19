import React, { useState } from 'react';
import '../css/App.css';

 /* Components */
 import Header from '../components/Header'  
 import ContentCreateUnit from '../components/ContentCreateUnit';

function CreateUnit() {

  let schooldata = {
    rol: 'Profesor',
    username: 'Fernando Ramírez Garrido', 
    schoolname: 'Escuela Particular Ejército de Salvación'
  }

  const [page] = useState("Nueva unidad")
  const [schoolData] = useState(schooldata)

  return (
    <div>
        <Header />
        <ContentCreateUnit name={page} />
    </div>
  );
}

export default CreateUnit;
