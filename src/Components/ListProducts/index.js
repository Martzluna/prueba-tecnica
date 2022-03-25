import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NoAvailable from '../../assets/not-available.png'

const base_url = "https://prueba-tecnica-hector.herokuapp.com/"

function ListProducts() {
    const [listProducts, setProducts] = useState([])
    useEffect(() => getListProducts(), [])
    const getListProducts = async () => {
        const { data } = await axios.get(base_url + "products")
        setProducts(data)
    }
    return (
        <div className='container'>
            <div className="list-group">
                {listProducts.map(item => (
                    <Link to={`/detailProduct/${item.id}`} className="list-group-item list-group-item-action" aria-current="true">
                        <div className="d-flex w-100 justify-content-between">
                            <img className="img-fluid rounded-start" style={{ width: 100 }} src={item.image || NoAvailable } alt={`img-${item.name}`} />
                            <div className='w-100 d-flex flex-column align-items-start'>
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>
                                <span>{item.price}</span>
                            </div>
                            <div>
                                <button className='btn btn-warning'>Ver</button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ListProducts