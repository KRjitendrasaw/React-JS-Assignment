
import React from 'react';
import ReactDom from 'react-dom';
const eInfo = {
  sname: "Jitendra Saw",
  location: 'Jharkhand',
  bloodGroup: 'A+',
  age: 21,
  profilImg: 'https://www.w3schools.com/howto/img_avatar.png'
}
function Mybio() {
  return (
    <>
      <div className='main-card'>
        <div className='Image'>
          <img src={eInfo.profilImg} alt= "jitu"/>
        </div>
        <h1 id='name'>{eInfo.sname}</h1>
        <p id='loc'>Location</p>
        <h2 id='LOC'>{eInfo.location}</h2>
        <p id='bldgrp'>Blood group</p>
        <h2 id='bldgp'>{eInfo.bloodGroup}</h2>
        <p id='age'>Age</p>
        <h2 id='AGE'>{eInfo.age}</h2>
      </div>
    </>
  )
}
ReactDom.render(<>
  <Mybio />
</>, document.getElementById('root'))