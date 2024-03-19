import React from 'react'
import "./DiningOut.css"
import Collection from '../common/collection'
import { FaFilter } from "react-icons/fa6";
import { MdLinearScale } from "react-icons/md";
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection';
import { diningOut } from '../../data/diningOut';


const collectionList = [
    {
        id: 1,
        title: "Live Sports Screenings",
        cover: "https://hblimg.mmtcdn.com/content/hubble/img/ttd_images_march/mmt/activities/m_Chidambaram_Southernspice_Non_Veg_Restaurant_2_l_667_1000.jpg",
        places: "12 Places"
    },
    {
        id: 2,
        title: "Newly Opened",
        cover: "https://thumbs.dreamstime.com/b/assorted-various-indian-food-dark-rustic-background-traditional-dishes-chicken-tikka-masala-palak-paneer-saffron-rice-lentil-163316040.jpg",
        places: "12 Places"
    },
    {
        id: 3,
        title: "Veggie Friendly",
        cover: "https://img.freepik.com/premium-photo/festive-food-indian-festival-diwali_92134-411.jpg",
        places: "23 Places"
    },
    {
        id: 4,
        title: "Trending his week",
        cover: "https://hips.hearstapps.com/hmg-prod/images/chicken-tikka-masala1-1663341991.jpg",
        places: "30 Places"
    },
    {
        id: 5,
        title: "Best of Bengaluru",
        cover: "https://hips.hearstapps.com/hmg-prod/images/chicken-tikka-masala1-1663341991.jpg",
        places: "116 Places"
    },
    {
        id: 6,
        title: "Outdoor Seating",
        cover: "https://cdn.tasteatlas.com//images/toplistarticles/d0e6a0a79d5f4197a51f4ca065393ffe.jpg?w=375&h=280",
        places: "116 Places"
    },
    {
        id: 7,
        title: "Brillant Briyanis",
        cover: "https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg",
        places: "116 Places"
    },
]
const diningFilter = [
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
const diningList = diningOut;

const DiningOut = () => {
    return (
        <div>
            <Collection lists={collectionList} />
            <div className='max-width'>
                <Filters filterList={diningFilter} />

            </div>
            <ExploreSection list={diningList} collectionName="Dine-Out Restaurants in Lucknow" />
        </div>
    )
}

export default DiningOut