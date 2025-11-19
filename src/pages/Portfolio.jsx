import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from '../Componentes/Portfolio/Body.jsx'


export default function Portfolio() {
    return (
        <>
            <StrictMode>
                <Body />
            </StrictMode>
        </>
    );
}
