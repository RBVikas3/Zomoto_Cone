import React from 'react'
import "./Delivery.css"
import Filters from '../common/filters'
import { FaFilter } from "react-icons/fa6";
import { MdLinearScale } from "react-icons/md";
import DeliveryCollections from './DeliveryCollections';
import TopBrands from './topBrands';
import ExploreSection from '../common/exploreSection';
import { restaurants } from '../../data/restaurants';

const Delivery = () => {
    const deliveryFilter = [
        {
            id: 1,
            icon: <FaFilter className='absolute-center' />,
            title: "Filters"
        },
        {
            id: 2,
            title: "Rating: 4.0+"
        },
        {
            id: 3,
            title: "Safe and Hygienic"
        },
        {
            id: 4,
            title: "Pure Veg"
        },
        {
            id: 5,
            icon: <MdLinearScale className='absolute-center' />,
            title: "Delivery Time"
        },
        {
            id: 6,
            title: "Great Offers"
        },

    ]
    const restaurantList = restaurants
    return (
        <div>
            <div className='max-width'>

                <Filters filterList={deliveryFilter} />
            </div>
            <DeliveryCollections />
            <TopBrands />
            <ExploreSection list={restaurantList} collectionName="Delivery Restaurants in Banglore" />
        </div>
    )
}

export default Delivery