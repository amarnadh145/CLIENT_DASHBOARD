import React, { useEffect, useState } from 'react'
import { API_URL } from '../Api'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
const Chains = () => {
    const [vendorData, setVendorData] = useState({})
    const [scrollPosition, setScrollPosition] = useState(0);
    const vendorFirmHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`)
            const newData = await response.json()
            setVendorData(newData)
        }
        catch (error) {
            alert("Failed to fetch the data")
            console.error(error, "Failed to fetch the data")
        }
    }
    useEffect(() => {
        vendorFirmHandler()
    }, [])
    const handleScroll = (direction) => {
        const gallery = document.getElementById("chainGallery")
        const scrollAmount = 500;
        if (direction == "left") {
            gallery.scrollTo({
                left: gallery.scrollLeft - scrollAmount,
                behaviour: "smooth"
            })
        }
        else if (direction == "right") {
            gallery.scrollTo({
                left: gallery.scrollLeft + scrollAmount,
                behaviour: "smooth"
            })
        }
    }
    return (
        <>
            <div className="btnSection">
                <h3>Top Restaurant Chains</h3>
                <div className="btnContainer">
                    <button className="btnIcons" onClick={() => { handleScroll("left") }}><FaArrowAltCircleLeft /></button>
                    <button className="btnIcons" onClick={() => { handleScroll("right") }}><FaArrowAltCircleRight /></button>
                </div>
            </div>
            <section className="chainSection" id="chainGallery" onScroll={(e) => setScrollPosition(e.target.scrollLeft)}>
                {vendorData.vendors && vendorData.vendors.map((vendor) => {
                    return (
                        <>
                            <div className="vendorBox">
                                {vendor.firm.map((item) => {
                                    return (
                                        <>
                                            {/* <div>{item.firmName}</div> */}
                                            <div className="firmGroup">

                                                <img src={`${API_URL}/uploads/${item.image}`} />

                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default Chains
