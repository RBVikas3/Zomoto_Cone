import React from 'react'
import { FaCaretRight } from "react-icons/fa";
import "./collection.css"
import Slider from 'react-slick';
import NextArrow from '../carousel/nextArrow';
import PrevArrow from '../carousel/prevArrow';
const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const Collection = ({ lists }) => {

    return (
        <div className='collection-wrapper'>
            <div className='max-width collection'>
                <div className='collection-title'>Collections</div>
                <div className='collection-subtitle-row'>
                    <div className='collection-subtitle-text'>
                        Explore curated lists of top restaurants, cafes, pubs, and bars in Lucknow, based on trends
                    </div>
                    <div className='collection-location'>
                        <div>
                            All collection in Lucknow <FaCaretRight className='absolute-center' />
                        </div>
                    </div>
                </div>
                <Slider {...settings}>
                    {lists.map((item) => (
                        <div>
                            <div className='collection-cover'>

                                <img src={item.cover} className='collection-image' alt={item.title} />
                                <div className='gradient-bg'></div>
                                <div className='collection-card-title'>{item.title}</div>
                                <div className='collection-card-subtitle'>
                                    {item.places} <FaCaretRight className='absolute-center' /></div>

                            </div>
                        </div>
                    ))

                    }
                </Slider>

            </div>
        </div>
    )
}

export default Collection