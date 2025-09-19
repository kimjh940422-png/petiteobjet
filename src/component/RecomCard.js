import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecomCard = ({item}) => {
  const navigate = useNavigate();

  return (
    <div className='card' onClick={()=>navigate(`/collections/${item.id}`)}>
        <img src={item.image} alt={item.title} />
        <div className="recom-text">
            <h3>{item.title}</h3>
            <span className="tag">{item.tags.join(' · ')}</span>
            <p className="text">{item.description}</p>
        </div>
    </div>
  )
}

export default RecomCard