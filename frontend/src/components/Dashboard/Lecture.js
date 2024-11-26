import React, { Fragment } from 'react';
import './Lecture.css';

const Lecture = ({lectures}) => {
  return (
    <Fragment>
        <div className='lectureContainer'>
        <img src={lectures.images[0].url} alt="" />

        </div>
    </Fragment>
  )
}

export default Lecture