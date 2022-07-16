import { useEffect, useState } from "react"
import { Album } from "../types/Album"
import { Api } from "../Api"
import * as C from '../styles'
import { Link, useParams } from "react-router-dom"

export const Galeria = () => {
    const [albums, setAlbums] = useState<Album[]>([])
    const [loading, setLoading] = useState(false)

    const params = useParams()

    useEffect( () => {
        loadAlbums()
    }, [])

    const loadAlbums = async () => {
        setLoading(false)
        let response = await Api.getAlbums()
        setLoading(true)
        return setAlbums(response)
    }

    return (
    <>
        {!loading &&
            <C.Loading>Loading...</C.Loading>
        }

        {loading &&
        <C.Container>
            <h2>Galeria de Fotos</h2>
            <hr/>

            {albums.map ( (item, index) => (
                <div className="albumsContainer" key={index}>
                    <Link className="link" to={`/album/${index + 1}`}><div className="title">{item.title}</div></Link>
                </div>
            ))}
        </C.Container>
        }
    </>
    )

}