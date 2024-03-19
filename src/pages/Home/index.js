import React, { useState } from 'react'
import Header from '../../components/header'
import TabOptions from '../../components/tabOptions'
import Footer from '../../components/footer'
import Delivery from '../../components/Delivery'
import DiningOut from '../../components/DiningOut'
import NightLife from '../../components/NightLife'

const HomePage = () => {
    const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
            <Footer />
        </>
    )
}
const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery />
        case "Dining Out":
            return <DiningOut />
        case "Night Life":
            return <NightLife />
        default:
            return <Delivery />
    }
}

export default HomePage