import styles from "./index.css"
import ReactDom from 'react-dom'
import React from 'react'
import Calculator from './main/Calculator'


const el = document.getElementById('root');
ReactDom.render(
    <>
        <Calculator />
    </>,
    el);