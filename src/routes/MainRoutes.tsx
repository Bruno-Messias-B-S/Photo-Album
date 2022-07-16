import { useRoutes } from "react-router-dom";
import { Galeria } from "../components/Galeria";
import { AlbumSelected } from "../components/AlbumSelected";
import { Photos } from "../components/Photos";
import { PhotoChosen } from "../components/PhotoChosen";

export const MainRoutes = () => {
    return useRoutes ([
        {path: '/', element: <Galeria />},
        {path: '/album/:id', element: <AlbumSelected />},
        {path: '/album/:id/photos', element: <Photos />},
        {path: '/photo/:id', element: <PhotoChosen />}
    ])
}