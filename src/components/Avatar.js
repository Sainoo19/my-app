// src/Avatar.js
import React from "react";

// Hàm lấy URL của hình ảnh
function getImageUrl(fileName) {
    const images = {
        raccoon: "https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI=",
        cat: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
        lion: "https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg",
        messi: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
        ronaldo: "https://phantom-marca.unidadeditorial.es/d3feaf82c625af3dddb9565ef5269a46/crop/0x0/2037x1358/resize/660/f/webp/assets/multimedia/imagenes/2024/09/10/17259965245564.jpg",
    };

    return images[fileName] || images.lion;
}

// Component Avatar
export function Avatar({ imageName, style }) {
    return (
        <img
            src={getImageUrl(imageName)}
            alt={imageName.description}
            width={style.width}
            height={style.height}
        />
    );
}



export function Profile({ name, player }) {
    return (
        <div>
            <h1>Lionel Messi</h1>
            <Avatar imageName={name} style={{ width: 100, height: 100 }} />
            <h3>Nationality: </h3><span>{player.nationality}</span>
            <h3>Trophy:</h3>{player.trophy}
            <h3>Ballon dor: </h3>{player.ballonDor}
            <h3>Golden Boot:</h3> {player.goldenBoot}
            <h3>Goals:</h3> {player.goal}
        </div>
    );
}
// nationality, trophy, ballonDor, goldenBoot, goal 