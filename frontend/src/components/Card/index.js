import React from 'react'
import './styles.css'

const Card = ({ src, client, description, date }) => {
  return (
    <div className='project-card'>
      <img src={src} alt="logo"/>
      <div className='card-info'>
        <h2 className='card-client'>{client}</h2>
        <p className='card-description'>{description}</p>
        <p className='card-date'>{date}</p>
      </div>
    </div>
  )
}

export default Card
