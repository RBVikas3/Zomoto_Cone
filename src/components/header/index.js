import React from 'react'
import { CiLocationOn } from 'react-icons/ci';
import { AiFillCaretDown } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaResearchgate } from 'react-icons/fa';
import { CiCoffeeCup } from "react-icons/ci";

import "./header.css"
const Header = () => {
    return (
        <div className='max-width header'>
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomoto-Logo" className='header-logo' />
            <div className='header-right'>
                <div className='header-location-search-container'>
                    <div className='location-wrapper'>
                        <div className='location-icon-name'>
                            < CiLocationOn className='absolute-center  location-Icon' />
                            <div>Banglore</div>

                        </div>
                        <AiFillCaretDown className='absolute-center' />
                    </div>
                    <div className='location-search-sepearator'></div>
                    <div className='header-searchbar'>
                        <AiOutlineSearch className='absolute-center search-icon' color='' />
                        <input placeholder='Search for restaurant, cuisine or a dish' className='search-input' />

                    </div>

                </div>
                <div className='profile-wrapper'>
                    <CiCoffeeCup className='header-profile-image' />
                    <div className='header-username'>
                        Shuvam
                    </div>
                    <AiFillCaretDown className='absolute-center profil-option-icon' />
                </div>

            </div>
        </div>
    )
}

export default Header