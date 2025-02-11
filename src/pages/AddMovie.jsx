import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const AddMovie = () => {

    const api_url = 'http://localhost:3000/movies'
    const navigate = useNavigate()

    const initialData = {
        title: '',
        director: '',
        abstract: '',
        image: null
    }
    const [formData, setFormData] = useState(initialData)

    const handleSetValue = (e) => {
        // console.log(e.target.files[0]);
        const { name, value } = e.target;
        if (name === 'image') {
            setFormData(prev => ({ ...prev, image: e.target.files[0] }))
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }))
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);

        const dataToSend = new FormData()
        for (let key in formData) {
            console.log(key, formData[key]);

            dataToSend.append(key, formData[key])
        }
        console.log(dataToSend);

        axios.post(api_url, dataToSend, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(() => navigate('/'))
            .catch(err => console.log(err)
            )
    };

    return (
        <div className="card">
            <header className="card-header">
                <h2> Aggiungi Un Nuovo Film</h2>
            </header>

            <section className="card-body">
                <form action="#" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Titolo</label>
                        <input
                            name="title"
                            className="form-control my-3"
                            placeholder="Inserisci il titolo"
                            type="text"
                            value={formData.title}
                            onChange={handleSetValue}
                        />
                    </div>
                    <div className="form-group">
                        <label>Regista</label>
                        <input
                            name="director"
                            className="form-control my-3"
                            placeholder="Inserisci il Regista"
                            type="text"
                            value={formData.director}
                            onChange={handleSetValue}
                        />
                    </div>
                    <div className="form-group">
                        <label>Immagine</label>
                        <input
                            name="image"
                            className="form-control my-3"
                            placeholder="Inserisci il Regista"
                            type="file"

                            onChange={handleSetValue}
                        />
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">Abstract</span>
                        <textarea name="text" value={formData.abstract} onChange={handleSetValue} className="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary my-3">
                        Add to HomePage
                    </button>
                </form>

            </section>
        </div>
    )
}

export default AddMovie