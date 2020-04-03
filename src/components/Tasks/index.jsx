import React from "react";
import "./tasks.scss";

import editSvg from '../../assets/img/edit.svg';
import removeSvg from '../../assets/img/remove.svg';

const Tasks = () => {
    return(
        <div className="tasks">
            <div className="tasks__header">
                <h2 className="tasks__title">
                    Фронтенд
                    <img className="tasks__edit" src={editSvg} alt="Редактировать"/>
                </h2>
            </div>
            <ul className="tasks__items">
                <li className="tasks__item">
                    <label className="checkbox">
                        <input type="checkbox"/>
                        <div className="checkbox__fake"></div>
                        <div className="checkbox__text">Изучить JavaScript</div>
                    </label>
                    <div className="tasks__remove">
                        <img src={removeSvg} alt="Удалить"/>
                    </div>
                </li>
                <li className="tasks__item">
                    <label className="checkbox">
                        <input type="checkbox"/>
                        <div className="checkbox__fake"></div>
                        <div className="checkbox__text">Изучить JavaScript</div>
                    </label>
                    <div className="tasks__remove">
                        <img src={removeSvg} alt="Удалить"/>
                    </div>
                </li>
                <li className="tasks__item">
                    <label className="checkbox">
                        <input type="checkbox"/>
                        <div className="checkbox__fake"></div>
                        <div className="checkbox__text">Изучить JavaScript</div>
                    </label>
                    <div className="tasks__remove">
                        <img src={removeSvg} alt="Удалить"/>
                    </div>
                </li>
                <li className="tasks__item">
                    <label className="checkbox">
                        <input type="checkbox"/>
                        <div className="checkbox__fake"></div>
                        <div className="checkbox__text">Изучить JavaScript</div>
                    </label>
                    
                </li>
            </ul>
            <div className="tasks__form">
                
            </div>
        </div>
    );
}

export default Tasks;