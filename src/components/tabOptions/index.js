import React from 'react'
import "./tabOptions.css"
import DeliveryImage from "../../Images/Deliver_image.jpg"
import DiningOut from "../../Images/DiningOut.png"
import NightLife from "../../Images/nightLife.png"
const tabs = [
    {
        id: 1,
        name: "Delivery",
        active_tag: DeliveryImage,
        backdrop: "#FCEEC0",
        // inactive_img:

    },
    {
        id: 2,
        name: "Dining Out",
        active_tag: DiningOut,
        backdrop: "#E5F3F3",
        // inactive_img:

    },
    {
        id: 3,
        name: "Night Life",
        active_tag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1qUFWbuA_J-4ShNta5TOXhqDKjW6_sgBjw&usqp=CAU",
        backdrop: "#EDf4F7",
        // inactive_img:

    }
]
const TabOptions = ({ activeTab, setActiveTab }) => {
    console.log("activeTab", activeTab)
    return (
        <div className='tab-options'>
            <div className='max-width options-wrapper'>
                {tabs.map((tab) => {
                    return (
                        <div onClick={() => setActiveTab(tab.name)}
                            className={`tab-item absolute-center cur-po ${activeTab === tab.name && "active-tab"}`}
                        >
                            <div className='tab-image-container absolute-center'
                                style={{ backgroundColor: `${activeTab === tab.name ? tab.backdrop : ""}` }}
                            >
                                <img className='tab-image' alt={tab.name} src={tab.active_tag} />

                            </div>
                            <div className='tab-name'>
                                {tab.name}
                            </div>
                        </div>
                    )
                })

                }
            </div>

        </div>
    )
}

export default TabOptions