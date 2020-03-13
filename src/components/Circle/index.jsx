import React from 'react';
import './Circle.scss';

const Circle = ({color}) => (<i className={`circle circle--${color}`}/>);

export default Circle;