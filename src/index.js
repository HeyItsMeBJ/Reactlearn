import React from "react";
import ReactDOM from "react-dom/client";
import BackgroundChanger from "./BackgroundChanger";
import RandomPasswordGenerator from "./RandomPasswordGenerator";
import IndexCurrencyConverter from "./currency_convertor/indexCurrencyConverter";

import './index.css';


function Greeting() {

    return (
        <>
            <BackgroundChanger />
            <RandomPasswordGenerator />
            <IndexCurrencyConverter />

        </>
    );

}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeting />)
