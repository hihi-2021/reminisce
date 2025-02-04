import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Concerts = () => {
  const concerts = useSelector(redux => redux.concerts)

  return (
    <div className='concerts'>
      <h1>List of Concerts</h1>
      <Link to='/addconcert'><button>Add Concert</button></Link>
      <div className='concerts-panel-container'>
        {concerts.map(concert => (
          <div key={concert.id} className='polaroid-card'>
            <img src={concert.image}/>
            <Link to={`/concerts/${concert.id}`} className='polaroid-text-link'><div>
              <p>{concert.artist}</p>
              <p>{concert.date}</p>
            </div></Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Concerts
