import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from '../Componentes/LinkBridge/Body.jsx'


export default function LinkBridge() {
    return (
        <>
            <StrictMode>
                <Body />
            </StrictMode>
        </>
    );
}
