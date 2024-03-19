import React from 'react'
import { FaRegStar } from "react-icons/fa6";
import "./exploreCard.css"

const ExploreCard = ({ restaurant }) => {

    return (
        <div className="explore-card cur-po">
            <div className='explore-card-cover'>
                <img src={restaurant.coverImage} alt={restaurant.name} className='explore-card-image' />

                <div className='deliver-time'>{restaurant.deliveryTime}</div>
                {restaurant?.proOff && <div className='pro-off'>{restaurant.proOff}</div>}
                {restaurant?.goldOff && <div className='gold-off absolute-center'>{restaurant?.goldOff}</div>}
                {restaurant?.offers && <div className='discount absolute-center'>{restaurant?.offers}</div>}
            </div>
            <div className='res-row'>
                <div className='res-name'>{restaurant.name}</div>
                {restaurant.rating && <div className='res-rating absolute-center'>
                    {restaurant.rating}<FaRegStar className='absolute-center icon ' />
                </div>}
            </div>
            <div className='res-row'>
                <div className='res-cuisine'>
                    <span className='res-cuisine-tag'>

                        {restaurant.cuisine}

                    </span>
                </div>
                <div className='approx-price'>
                    {restaurant.approxPrice}
                </div>
            </div>
            <div className='card-separator'></div>
            <div className='bottomContainer'>{restaurant.bottomContainer}</div>
        </div>
    )
}

export default ExploreCard