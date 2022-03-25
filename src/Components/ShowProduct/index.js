import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import NoAvailable from '../../assets/not-available.png'

const base_url = "https://prueba-tecnica-hector.herokuapp.com/"

function ShowProduct() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [details, setDetails] = useState({})
    useEffect(() => getDetailProduct(), [])
    const getDetailProduct = async () => {
        const { data } = await axios.get(base_url + "products/" + id)
        setDetails(data)
    }
    const deleteProduct = async () => {
        try {
            const result = await axios.delete(base_url + "products/" + id)
            navigate(-1)
        } catch (error) {
            
        }
    }
    return (
        <div className='container'>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={details.image || NoAvailable} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{details.name}</h5>
                            <p className="card-text">{details.description}</p>
                            <p className="card-text"><small className="text-muted">{details.price}</small></p>
                            <div className='d-grid gap-3'>
                                <button className='btn btn-danger mr-3' onClick={deleteProduct}>Eliminar</button>
                                <button className='btn btn-primary'>Editar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowProduct