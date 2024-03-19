import React from 'react'
import "./FilterItem.css"

const FilterItem = ({ filter, key }) => {
    console.log("filter", filter)
    return (
        <div className='filter-item'>
            <div className='filter-icon'>
                {filter.icon && filter.icon}
            </div>
            {/* <div>{filter.icon}</div> */}
            <div className='filter-name'>
                {filter.title}
            </div>




        </div>
    )
}

export default FilterItem