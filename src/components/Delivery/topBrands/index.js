import React from 'react'
import "./topBrands.css"
import Slider from "react-slick";

import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
const brandList = [
    {
        id: 1,
        time: "35 min",
        cover: "https://media-cdn.tripadvisor.com/media/photo-s/09/81/85/7c/domino-s-pizza-vereeniging.jpg"
    },
    {
        id: 2,
        time: "29 min",
        cover: "https://bcassetcdn.com/public/blog/wp-content/uploads/2023/06/30145430/Burger-King_Logo-1024x614.jpg"
    },
    {
        id: 3,
        time: "32 min",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn7aKM6igrGn1gYxj49hNRgA6HY63ul-wela6lMbGzUlXTmVUsUC_3PN7qiq7JKbQIX7g&usqp=CAU"
    },
    {
        id: 4,
        time: "30 min",
        cover: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png"
    },
    {
        id: 5,
        time: "35 min",
        cover: "https://assets.unileversolutions.com/v1/115638672.jpg"
    },
    {
        id: 6,
        time: "41 min",
        cover: "https://cdn.pixabay.com/photo/2021/01/27/06/45/logo-5953855_1280.png"
    },
    {
        id: 7,
        time: "49 min",
        cover: "https://cdn.pixabay.com/photo/2022/05/13/12/00/logo-7193556_640.png"
    },
]
const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const TopBrands = () => {
    return (
        <div className="top-brands max-width">
            <div className='collection-title'>Top brands for you </div>
            <Slider {...settings}>
                {brandList.map((brand) => {
                    return <div>
                        <div className='top-brands-cover'>
                            <img src={brand.cover} className='top-brands-image' alt={brand.time} />
                        </div>
                    </div>
                })

                }
            </Slider>

        </div>
    )
}

export default TopBrands