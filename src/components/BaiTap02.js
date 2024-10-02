import React from "react";
import { Avatar } from "./Avatar";



export function List({ playerName }) {
    // Định nghĩa todo list cho mỗi cầu thủ
    const todoLists = {
        Messi: ['Score', 'Assist', 'Possession Game'],
        Ronaldo: ['Header', 'Free Kick', 'Sprint'],
        Neymar: ['Dribble', 'Skill Moves', 'Assist'],
    };

    // Lấy danh sách công việc cho cầu thủ dựa vào playerName
    const playerTodos = todoLists[playerName] || [];

    return (
        <div>
            {playerTodos.length > 0 ? (
                playerTodos.map((item, index) => (
                    <div key={index}>
                        <li>{item}</li> {/* Thêm dấu chấm trước mỗi item */}
                    </div>
                ))
            ) : (
                <div>No todos found for {playerName}</div>
            )}
        </div>
    );
}

export function Title({ playerName }) {
    return (
        <h1> {playerName}'s Todos </h1>
    );


}

export function Todos({ image, playerName }) {
    return (
        <div>
            <Title playerName={playerName} />
            <Avatar imageName={image} style={{ width: 100, height: 150 }} />
            <List playerName={playerName} />
        </div>
    );
}
