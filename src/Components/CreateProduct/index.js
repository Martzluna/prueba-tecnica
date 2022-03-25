import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "../../App.css"

const base_url = "https://prueba-tecnica-hector.herokuapp.com/"

function CreateProduct() {
    const name = useRef()
    const description = useRef()
    const price = useRef()
    const category = useRef()
    const [alert, setAlert] = useState({})
    const [imagebase64, setImagebase64] = useState()
    const submitForm = async (e) => {
        e.preventDefault()
        const data = {
            name: name.current.value,
            description: description.current.value,
            price: price.current.value,
            category: price.current.value,
            image: imagebase64
        }
        console.log(data);
        const result = await axios.post(base_url + "products", data)
        if(result.status === 201 ){
            setAlert({
                show: true,
                type: "success",
                message: "Creado exitosamente"
            })
        } else {
            setAlert({
                show: true,
                type: "danger",
                message: `Ha ocurrido un error - ${result.status}`
            })
        }
    }

    const handleUploadFile = async (event) => {
        console.log(event.target.files)
        const base64 = await getBase64(event.target.files[0])
        setImagebase64(base64)
    }
   
    const getBase64 = file => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                console.log("Called", reader);
                baseURL = reader.result;
                console.log(baseURL);
                resolve(baseURL);
            };
        });
    };
    return (
        <div className='container'>
            <form onSubmit={submitForm}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="nameInput" ref={name} />
                    <label htmlFor="nameInput">Nombre</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="descriptionInput" ref={description} />
                    <label htmlFor="descriptionInput">Descripcion</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="priceInput" ref={price} />
                    <label htmlFor="priceInput">Precio</label>
                </div>
                <div className="form-floating mb-3">
                    <select id="categoryInput" className="form-select" aria-label="Disabled select example" ref={category}>
                        <option selected>Selecciona</option>
                        <option value="shoes">Zapatos</option>
                        <option value="clothes">Ropa</option>
                        <option value="balls">Balones</option>
                    </select>
                    <label htmlFor="categoryInput">Categoria</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="file" className="form-control" id="imageInput" onChange={handleUploadFile}/>
                    <label htmlFor="imageInput">Imagen</label>
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>
                        Guardar informacion
                    </button>
                </div>
                <br></br>
            </form>
            {alert.show && (
                <div class={`alert alert-${alert.type}`} role="alert">
                    {alert.message}
                </div>
            )}
        </div>
    )
}

export default CreateProduct