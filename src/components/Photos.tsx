import { useEffect, useState } from 'react';
import { Photo } from '../types/Photo';
import { Api } from '../Api';
import { Link, useParams } from 'react-router-dom';
import * as C from '../styles'

export const Photos = () => {
    const [photos, setPhotos] = useState<Photo[]>([])

    const params = useParams()

    useEffect( () => {
        if (params.id) {
            getPhotos(params.id)
        }
    }, [])

    const getPhotos = async (id: string) => {
        let response = await Api.getPhotos(id)
        return setPhotos(response)
    }

    return (
        <C.PhotosAlbum>
            {photos.map( (item, index) => (
                <div className="alignment" key={index}>
                    <Link to={`/photo/${item.id}`}><img src={item.url} /></Link>
                    <div className="title">{item.title}</div>
                </div>
            ))}
        </C.PhotosAlbum>
    )
}