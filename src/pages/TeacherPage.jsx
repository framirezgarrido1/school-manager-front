import React from 'react';
import '../css/App.css';

/* Components */
import Header from '../components/Header'  
import TeacherInfo from '../components/TeacherInfo'  

function TeacherPage(props) {

  const { match: { params } } = props;


  return (
    <div>
      <Header />
      <TeacherInfo id={params.id} />
    </div>
  );
}

export default TeacherPage;
