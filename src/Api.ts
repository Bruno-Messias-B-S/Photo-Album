import axios from 'axios';

const urlAx = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const Api = {
    getAlbums: async () => {
        let response = await urlAx.get("/albums")
        return response.data
    },
    getAlbumsN: async (id: string) => {
        let response = await urlAx.get(`/albums/${id}`)
        return response.data
    },
    getPhotos: async (id: string) => {
        let response = await urlAx.get(`/albums/${id}/photos`)
        return response.data
    },
    getPhoto: async (id: string) => {
        let response = await urlAx.get(`/photos/${id}`)
        return response.data
    }
}