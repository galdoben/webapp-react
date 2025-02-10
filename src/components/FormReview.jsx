import { useState } from "react"
import axios from "axios"

const FormReview = ({ movie_id }) => {

    const api_url = `${import.meta.env.VITE_API_URL}/${movie_id}/reviews`

    const initialFormData = {
        text: '',
        vote: '',
        name: ''
    }
    const [formData, setFormData] = useState(initialFormData)

    const handlerSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        console.log(api_url);


        axios.post(api_url, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                console.log(res.data)
                setFormData(initialFormData)

            })
            .catch(err => {
                console.log(err);

            })


    }



    const setValue = (e) => {
        const { value, name } = e.target
        console.log(e.target);
        setFormData((prev => ({ ...prev, [name]: value })))

    }

    return (
        <div className="card">
            <header className="card-header">
                <h2>Aggiungi una recensione</h2>
            </header>
            <div className="card-body">
                <form action="#" onSubmit={handlerSubmit} >
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                        <input type="text" name="name" value={formData.name} onChange={setValue} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">Review</span>
                        <textarea name="text" value={formData.text} onChange={setValue} className="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <div className="input-group input-group-sm mb-3 my-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Rate</span>
                        <input type="number" name="vote" value={formData.vote}
                            onChange={setValue} min={1} max={5} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <button type="submit" className="btn btn-success">Send</button>
                </form>
            </div>

        </div>
    )
}

export default FormReview