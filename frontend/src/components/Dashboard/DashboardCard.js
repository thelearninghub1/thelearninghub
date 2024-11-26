import React from 'react'
import { Link } from 'react-router-dom'
import './DashboardCard.css';



const DashboardCard = ({details}) => {
  return (
    <Link to={`/dashboardDetails/${details._id}`} className='dashboardCardContainer'>
        <p>{details.name}</p>
    </Link>
  )
}

export default DashboardCard