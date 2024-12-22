import React, { Fragment } from 'react'
import Helmet from 'react-helmet';

const MetaData = ({title}) => {
  return (
    <Fragment>
        <Helmet><title>{title}</title></Helmet>
    </Fragment>
  )
}

export default MetaData