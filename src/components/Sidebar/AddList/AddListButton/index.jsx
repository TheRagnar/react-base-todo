import React from 'react';
import List from '../../List';
import './addListButton.scss';

const AddListButton = ({onClick}) => {
    return (
        <List onClick={onClick} items={[
            {
                "id": 1,
                "name": "Добавить категорию",
                "className": "addList-button",
                "icon": (
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 8H15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )
            },
        ]}/>
    )
}

export default AddListButton;