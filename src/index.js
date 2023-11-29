import React from "react";
import ReactDOM from "react-dom/client";
import BackgroundChanger from "./BackgroundChanger";
import RandomPasswordGenerator from "./RandomPasswordGenerator";
import IndexCurrencyConverter from "./currency_convertor/indexCurrencyConverter";
import Capp from "./contextlearning/Capp";
import './index.css';
import Template from "./contextlearning/theme/Template";


function Greeting() {

    return (
        <>
            <BackgroundChanger />
            <RandomPasswordGenerator />
            <IndexCurrencyConverter />
            <Capp/>
            
            <Template/>
        </>
    );

}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeting />)
