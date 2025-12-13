import { StrictMode } from 'react'
import "../../styles/Portfolio/Portfolio.css";
import Sala from './Sala.jsx'
import Quarto from './Quarto.jsx'
import Varanda from './Varanda.jsx'

import Banheiro from './Banheiro.jsx'


export default function Body() {
    return (
        <>
            <div className="portfolio-container">
                <h1 className="portfolio-title">Portfólio</h1>
                <Sala />
                <Quarto />
                <Varanda />
               
                <Banheiro />
               
            </div>
        </>
    );
}
