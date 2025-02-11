import React, { useEffect } from 'react'
import { useState } from 'react'
import { API_URL } from '../Api'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar.jsx'
const ProductMenu = () => {
    const [products, setProducts] = useState([])
    const { firmId, firmName } = useParams()
    const productHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/product/${firmId}/products`)
            const newProductData = await response.json()
            setProducts(newProductData.products)
        } catch (error) {
            alert(error, "failed to fetch products")
        }
    }
    useEffect(() => {
        productHandler()
    }, [])
    return (
        <>
            <NavBar />
            <div className="productSection">
                <h3>{firmName}</h3>
                {products.map((item) => {
                    return (
                        <div className='productBox'>
                            <div className="productDe">
                                <strong>{item.productName}</strong><br />
                                {item.price}<br />
                                {item.description}
                            </div>
                            <div className="productGroup">
                                <img src={`${API_URL}/uploads/${item.image}`} />
                                <div className='addButton'>ADD</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ProductMenu
