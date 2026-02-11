import { StrictMode } from 'react'
import Hero from './Hero.jsx'
import Diferenciais from './Diferenciais.jsx'
import HeroSocial from './HeroSocial.jsx'
import WhatsAppButton from '../../Comuns/wpp'

export default function Body() {
    return (
        <>
            <StrictMode>

                <Hero />
                <Diferenciais />
                <HeroSocial />
                <WhatsAppButton />

            </StrictMode>
        </>
    );
}
