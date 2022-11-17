import styles from "./index.css"
import ReactDom from 'react-dom'
import React from 'react'

import App from "./App"

const el = document.getElementById('root');
ReactDom.render(
    <App />,
    el);