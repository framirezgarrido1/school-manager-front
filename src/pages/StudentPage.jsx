import React from 'react';
import '../css/App.css';

/* Components */
import Header from '../components/Header'  
import StudentData from '../components/StudentData'  

function StudentPage(props) {

  const { match: { params } } = props;


  return (
    <div>
      <Header />
      <StudentData id={params.id} />
    </div>
  );
}

export default StudentPage;
