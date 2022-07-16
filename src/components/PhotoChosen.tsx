import { useEffect, useState } from "react"
import { Api } from "../Api"
import { Photo } from "../types/Photo"
import { useNavigate, useParams } from "react-router-dom"
import * as C from '../styles'

export const PhotoChosen = () => {
    const [photo, setPhoto] = useState<Photo>()
    const [loading, setLoading] = useState(false)

    const params = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        if(params.id) {
            loadPhoto(params.id)
        }
    }, [])

    const loadPhoto = async (id: string) => {
        setLoading(false)
        let response = await Api.getPhoto(id)
        setLoading(true)
        return setPhoto(response)
    }

    const backPage = () => {
        navigate(-1)
    }

    return(
    <>
        {!loading &&
            <C.Loading>Loading...</C.Loading>
        }

        {loading &&
        <C.PhotoOnly>
            <C.ContainerBtn2>
                <button onClick={backPage}>Voltar</button>
            </C.ContainerBtn2>
            {photo &&
            <>
                <img src={photo.url} />
                <div>{photo.title}</div>
            </>
            }
        </C.PhotoOnly>
        }
    </>
    )
}