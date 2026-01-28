import { StrictMode } from 'react'
import "../../styles/Portfolio/Portfolio.css";
import Gallery from './Gallery.jsx'
import TourVirtual from './TourVirtual.jsx'


export default function Body() {
    return (
        <>
            <div className="portfolio-container">
                <h1 className="portfolio-title">Portfólio</h1>
                <Gallery />
                <TourVirtual />

            </div>
        </>
    );
}
