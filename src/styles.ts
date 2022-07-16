import style from 'styled-components';

export const Container = style.div`
    .title {
        border: 1px solid black;
        padding:15px 10px;
        margin:15px 5px;
        border-radius:5px;
        cursor:pointer;
    }

    .title:hover {
        background-color:#999;
    }

    h2 {
        text-align:center;
        font-size:26px;
        margin:10px;
    }

    .link {
        text-decoration:none;
        color:black;
    }
`;

export const Container2 = style.div`
    h2 {
        text-align:center;
        font-size:26px;
        margin:10px;
    }
`;

export const PhotosAlbum = style.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .title {
        width:200px;
        text-align:center;
        margin:auto;
    }

    .divPhotos {
        margin-bottom:35px;
        margin-top:20px;
    }

    img {
        margin-bottom:7px;
        border-radius:5px;
        width:200px;
        margin-top:20px;
    }

    img:hover {
        opacity: 0.7;
    }

    .alignment {    
        display:flex;
        flex-direction:column;
        align-items:center;
    }
`;

export const PhotoOnly = style.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
    img {
        width:550px;
        margin-bottom:5px;
        border-radius:5px;
    }

    div {
        font-size:20px;
        width:550px;
        text-align:center;
    }
`;

export const ContainerBtn = style.div`
    display:flex;
    justify-content:center;
    margin-top:18px;

    button {
        background-color:transparent;
        border:1px solid black;
        padding:5px 15px;
        border-radius:5px;
        cursor:pointer;
    }
`;

export const ContainerBtn2 = style.div`
    display:flex;
    justify-content:center;

    button {
        background-color:transparent;
        border:1px solid black;
        padding:5px 15px;
        border-radius:5px;
        cursor:pointer;
        margin-bottom:15px;
    }
`;

export const Loading = style.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:30px;
    background-color: #999;
`;