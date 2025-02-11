import { Link } from "react-router-dom";
import { API_URL } from "../Api";
import React, { useEffect, useState } from 'react'
const FirmCollections = () => {
    const [selectedRegion, setSelectedRegion] = useState("All")
    const [firmData, setFirmData] = useState([])
    const [activeCategory, setActiveCategory] = useState("All")
    const firmDataHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`)
            const newFirmData = await response.json()
            setFirmData(newFirmData.vendors)
        }
        catch (error) {
            alert(error, "firm data not fetched")
        }
    }
    useEffect(() => {
        firmDataHandler()
    }, [])
    const filterHandler = (region, category) => {
        setSelectedRegion(region)
        setActiveCategory(category)
    }
    return (
        <>
            <h3>Restaurant with online food ordering</h3>
            <div className="filterButton">
                <button onClick={() => filterHandler("All", 'All')} className={activeCategory === 'All' ? 'activeButton' : ''}>All</button>
                <button onClick={() => filterHandler("South-Indian", 'south-indian')} className={activeCategory === 'south-indian' ? 'activeButton' : ''}>South-Indian</button>
                <button onClick={() => filterHandler("North-Indian", 'north-indian')} className={activeCategory === 'north-indian' ? 'activeButton' : ''}>North-Indian</button>
                <button onClick={() => filterHandler("Chineese", 'chineese')} className={activeCategory === 'chineese' ? 'activeButton' : ''}>Chineese</button>
                <button onClick={() => filterHandler("Bakery", 'bakery')} className={activeCategory === 'bakery' ? 'activeButton' : ''}>Bakery</button>
            </div>
            <section className="firmSection">
                {firmData.map((apple) => {
                    return apple.firm.map((item) => {
                        if (selectedRegion === "All" ||
                            item.region.includes(selectedRegion.toLocaleLowerCase())
                        ) {
                            return (
                                <div className="firmGroupBox">
                                    <Link to={`/products/${item._id}/${item.firmName}`} className="link" key={item._id}>
                                        <div className="firmImage">
                                            <img src={`${API_URL}/uploads/${item.image}`} />
                                            <div className="firmOffer">{item.offer}</div>
                                        </div>
                                    </Link>
                                    <div className="firmDetails">
                                        <strong>{item.firmName}</strong><br />
                                        {item.region.join(", ")}<br />
                                        {item.area}
                                    </div>
                                </div >
                            )
                        }
                        return null
                    })
                })}
            </section >
        </>
    )
}

export default FirmCollections
