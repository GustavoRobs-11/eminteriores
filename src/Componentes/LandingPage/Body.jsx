import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './Hero.jsx'
import Diferenciais from './Diferenciais.jsx'
import HeroSocial from './HeroSocial.jsx'

export default function Body() {
    return (
        <>
            <StrictMode>

                <Hero />
                <Diferenciais />
                <HeroSocial />

            </StrictMode>,

        </>



    );
}
