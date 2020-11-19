import React, { useState } from 'react';
import '../css/App.css';

 /* Components */
 import Header from '../components/Header'  
 import TeacherData from '../components/TeacherData';


function Teachers() {

  const [page] = useState("Profesores")

  return (
    <div>
    <Header />
    <TeacherData name={page} />
  </div>
  );
}

export default Teachers;
