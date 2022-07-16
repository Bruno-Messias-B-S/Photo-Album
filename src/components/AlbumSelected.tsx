import { useEffect, useState } from "react"
import { Photo } from "../types/Photo"
import { Api } from "../Api"
import { useParams } from "react-router-dom"
import { Photos } from "./Photos"
import { useNavigate } from "react-router-dom"
import * as C from '../styles'

export const AlbumSelected = () => {
    const [albums, setAlbums] = useState<Photo>()
    const [loading, setLoading] = useState(false)

    const params = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        if (params.id) {
            loadAlbums(params.id)
        }
    }, [])

    const loadAlbums = async (id: string) => {
        setLoading(false)
        let response = await Api.getAlbumsN(id)
        setLoading(true)
        return setAlbums(response)
    }

    const backPage = () => {
        navigate(-1)
    }

    return (
    <>
        {!loading &&
            <C.Loading>Loading...</C.Loading>
        }

        {loading &&
        <C.Container2>
            <h2>Album {params.id}</h2>
            <hr/>

        <C.ContainerBtn>
            <button onClick={backPage}>Voltar</button>
        </C.ContainerBtn>

            {albums &&
            <>
                <Photos />
            </>
            }
        </C.Container2>
        }
    </>
    )
}