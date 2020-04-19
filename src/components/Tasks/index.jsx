import React from "react";
import "./tasks.scss";

import editSvg from '../../assets/img/edit.svg';
import removeSvg from '../../assets/img/remove.svg';

const Tasks = ( {list} ) => {
    return(
        <div className="tasks">
            <div className="tasks__header">
                <h2 className="tasks__title">
                    {list.name}
                    <img className="tasks__edit" src={editSvg} alt="Редактировать"/>
                </h2>
            </div>
            <ul className="tasks__items">
                {
                    list.tasks.map( (task, key) => 
                        <li key={key} className="tasks__item">
                            <label htmlFor={`task-${task.id}`} className="checkbox">
                                <input id={`task-${task.id}`} checked={task.completed} type="checkbox"/>
                                <div className="checkbox__fake"></div>
                                <input className="checkbox__text" value={task.text + '-'+ task.completed } readOnly/>
                            </label>
                            <div className="tasks__remove">
                                <img src={removeSvg} alt="Удалить"/>
                            </div>
                        </li>
                        )
                }
            </ul>
            <div className="tasks__form">
                
            </div>
        </div>
    );
}

export default Tasks;