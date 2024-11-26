import React, { Fragment } from 'react';
import './PageNotFound.css';
import NotFound from '../../images/404.png'
import {Link} from 'react-router-dom';


const PageNotFound = () => {
  return (
    <Fragment>
          <div className="not-found">
      <img src={NotFound} alt="Page not found" className="not-found-image" />
      <h1>Look like you’re lost</h1>
      <p>Either the page is unavailable, or you’ve stayed here for too long</p>
      <Link className="home-button" to={"/"}>Go to Home</Link>
    </div>
    </Fragment>
  )
}

export default PageNotFound