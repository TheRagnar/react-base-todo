import React, { useState, useEffect } from "react";
import axios from "axios";
import classNames from "classnames";

import AddListButton from "./AddListButton";
import Circle from "../../Circle";
import closeIcon from "../../../assets/img/close.svg";
import "./addList.scss";

const AddList = ({ colors, onAdd }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, setSelectedColor] = useState(0);
    const [categoryValue, setCategoryValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (Array.isArray(colors)) {
            setSelectedColor(colors[0].id);
        }
    }, [colors]);

    const addList = () => {
        if (!categoryValue) {
            alert("Введите категорию списка");
            return;
        }
        setIsLoading(true)
        axios
            .post("http://localhost:3001/lists", {
                name: categoryValue,
                colorId: selectedColor,
            })
            .then(({ data }) => {
                const color = colors.filter((c) => c.id === selectedColor)[0].name;
                const listObject = {...data, color: {name: color}}
                onAdd(listObject);
                onClose();
            }).finally(() => {
                setIsLoading(false)
            });
    };
    const onClose = () => {
        setVisiblePopup(false);
        setCategoryValue("");
        setSelectedColor(colors[0].id);
    };

    return (
        <div className="addList">
            <AddListButton
                onClick={() => {
                    setVisiblePopup(!visiblePopup);
                }}
            />
            {visiblePopup && (
                <div className="addList__popup">
                    <div className="addList__input input">
                        <input
                            type="text"
                            onChange={(e) => {
                                setCategoryValue(e.target.value);
                            }}
                            value={categoryValue}
                            placeholder="Название категории"
                        />
                    </div>
                    <ul className="addList__circles">
                        {colors.map((color) => (
                            <li
                                key={color.id}
                                onClick={() => {
                                    setSelectedColor(color.id);
                                }}
                                className={classNames(
                                    { active: color.id === selectedColor },
                                    "addList__circle"
                                )}
                            >
                                <Circle color={color.name} />
                            </li>
                        ))}
                    </ul>
                    <div className="addList__button">
                        { isLoading ? (<button onClick={addList} className="btn btn--primary" disabled>Добавление</button>) : (<button onClick={addList} className="btn btn--primary">Добавить</button>)}
                    </div>
                    <img
                        onClick={onClose}
                        src={closeIcon}
                        className="addList__close"
                        alt="close"
                    />
                </div>
            )}
        </div>
    );
};
export default AddList;
