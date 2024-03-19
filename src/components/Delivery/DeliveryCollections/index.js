import React from 'react'
import "./DeliveryCollections.css"
import Slider from "react-slick";
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import DeliveryItem from './DeliveryItem';
const deliveryItem = [
    {
        id: 1,
        title: "Pizza",
        cover: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 2,
        title: "Burger",
        cover: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 3,
        title: "Rolls",
        cover: "https://images.pexels.com/photos/13265657/pexels-photo-13265657.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 4,
        title: "Cake",
        cover: "https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 5,
        title: "Briyani",
        cover: "https://images.pexels.com/photos/5410401/pexels-photo-5410401.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 6,
        title: "Chaat",
        cover: "https://images.pexels.com/photos/13063313/pexels-photo-13063313.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 7,
        title: "Momos",
        cover: "https://images.pexels.com/photos/18803174/pexels-photo-18803174/free-photo-of-momos-dumplings-with-sauces.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
        id: 8,
        title: "Paneer",
        cover: "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=600"

    },
    {
        id: 9,
        title: "Samosa",
        cover: "https://images.pexels.com/photos/14883757/pexels-photo-14883757.jpeg?auto=compress&cs=tinysrgb&w=600"

    },
    {
        id: 10,
        title: "Paratha",
        cover: "https://images.pexels.com/photos/12737919/pexels-photo-12737919.jpeg?auto=compress&cs=tinysrgb&w=600"

    },
    {
        id: 11,
        title: "Pastery",
        cover: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600"

    }
]
const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const DeliveryCollections = () => {
    return (
        <div className='delivery-collection'>
            <div className='max-width'>

                <div className='collection-title'> Eat what makes you  happy </div>
                <Slider {...settings}>
                    {
                        deliveryItem.map((item) => {
                            return (
                                <DeliveryItem item={item} />
                            )
                        })
                    }
                </Slider>

            </div>
        </div>
    )

}

export default DeliveryCollections