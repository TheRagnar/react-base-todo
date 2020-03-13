import React, { useState } from 'react';
import classNames from 'classnames';
import AddListButton from './AddListButton';
import Circle from '../../Circle';
import closeIcon from '../../../assets/img/close.svg';
import './addList.scss';

const AddList = ({ colors }) => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const [selectedColor, setSelectedColor] = useState(0)

    return (
        <div className="addList">
            <AddListButton onClick={() => {setVisiblePopup(!visiblePopup)}}/>
            {visiblePopup && (
                <div className="addList__popup">
                    <div className="addList__input input">
                        <input type="text" placeholder="Название категории"/>
                    </div>
                    <ul className="addList__circles">
                        {colors.map(color => (
                            <li key={color.id} onClick={()=>{setSelectedColor(color.id)}} className={classNames({'active': color.id === selectedColor},'addList__circle')}>
                                <Circle color={color.name}/>
                            </li>
                        ))}
                    </ul>
                    <div className="addList__button">
                        <button className="btn btn--primary">Добавить</button>
                    </div>
                    <img onClick={() => {setVisiblePopup(false)}} src={closeIcon} className="addList__close" alt="close"/>
                </div>
            )}
        </div>
    );
}
export default AddList;