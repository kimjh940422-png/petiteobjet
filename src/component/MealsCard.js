import React from 'react'
import { useNavigate } from 'react-router-dom'

const MealsCard = ({item}) => {
    const navigate = useNavigate()
  return (
    <div className="meals-card" onClick={() => {navigate(`/collections/${item.id}`)}}>
        <figure>
            <img src={item.image} alt={item.title} />
        </figure>
        <div className="meals-text">
            <h3>{item.title}</h3>
            <p className="info">
                <span className="tags">{item.tags.join(' · ')}</span>
                <p className="desc">{item.description}</p>
                {item.recommended&&<span className='badeg'>추천</span>}
            </p>
        </div>
    </div>
  )
}

export default MealsCard