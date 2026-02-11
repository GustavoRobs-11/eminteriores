import { StrictMode } from 'react'
import Contato from './section.jsx'
import WhatsAppButton from '../../Comuns/wpp'

export default function Body() {
    return (
        <>
            <StrictMode>

                <Contato />
                <WhatsAppButton />

            </StrictMode>
        </>
    );
}
