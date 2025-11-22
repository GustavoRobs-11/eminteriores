// Contato.jsx 
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../../styles/Contato/contato.css";
import heroImg from "../../img/Contato/foto-1.png";

export default function Contato() {

    const ambientes = [
        "Sala de estar",
        "Cozinha",
        "Quarto",
        "Planta completa",
        "Outro →",
    ];

    const reformas = [
        "Troca de revestimento",
        "Alterar a iluminação",
        "Rebaixo do teto em gesso",
        "Alterar pontos elétricos",
        "Marmoraria",
        "Marcenaria",
        "Reforma completa",
    ];

    const statusObra = [
        "Troca de revestimento",
        "Moro no local e quero reformar",
        "Não moro no local mas tenho acesso",
    ];

    const urgencia = [
        "Não tenho pressa e prefiro fazer com calma",
        "Tenho urgência para iniciar a obra",
        "Já iniciei a obra",
    ];

    // ESTADOS
    const [ambienteSelecionado, setAmbienteSelecionado] = useState("");
    const [reformasSelecionadas, setReformasSelecionadas] = useState([]);
    const [statusSelecionado, setStatusSelecionado] = useState("");
    const [urgenciasSelecionadas, setUrgenciasSelecionadas] = useState([]);


    // Toggle checkbox
    const toggleReforma = (item) => {
        if (reformasSelecionadas.includes(item)) {
            setReformasSelecionadas(reformasSelecionadas.filter(r => r !== item));
        } else {
            setReformasSelecionadas([...reformasSelecionadas, item]);
        }
    };
    const toggleUrgencia = (item) => {
        if (urgenciasSelecionadas.includes(item)) {
            setUrgenciasSelecionadas(
                urgenciasSelecionadas.filter(u => u !== item)
            );
        } else {
            setUrgenciasSelecionadas([...urgenciasSelecionadas, item]);
        }
    };




    // Enviar para WhatsApp
    const enviarWhatsApp = () => {

        const numero = "5511961640586";

        const mensagem = `
*Olá Eduarda* 

Estou entrando em contato através do site EmInteriores.com.br para solicitar um orçamento.

Minhas escolhas são:

*Ambiente desejado:* 
${ambienteSelecionado || "Não informado"}

*O que deseja reformar:* 
${reformasSelecionadas.length > 0 ? reformasSelecionadas.join(", ") : "Nenhum item selecionado"}

*Status da obra:* 
${statusSelecionado || "Não informado"}

*Urgência:* 
${urgenciasSelecionadas.length > 0 ? urgenciasSelecionadas.join(", ") : "Nenhum item selecionado"}

    `;

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    };

    return (
        <section className="contato-section">

            <h1 className="titulo-contato">Vamos conversar</h1>
            <p className="subtitulo-contato">
                Escolha as opções que melhor refletem suas necessidades
            </p>

            <div className="contato-container">

                {/* ------ LADO ESQUERDO ------- */}
                <div className="contato-left">

                    {/* Ambiente */}
                    <div className="card-contato">
                        <h2>Qual ambiente você quer projetar</h2>

                        <div className="buttons-ambientes">
                            {ambientes.map((item) => (
                                <button
                                    key={item}
                                    className={`btn-ambiente ${ambienteSelecionado === item ? "ativo" : ""}`}
                                    onClick={() => setAmbienteSelecionado(item)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Reformas */}
                    <div className="card-contato">
                        <h2>O que você pensa em reformar?</h2>
                        <div className="lista-opcoes">
                            {reformas.map((item) => (
                                <label key={item} className="checkbox-line">
                                    <input
                                        type="checkbox"
                                        checked={reformasSelecionadas.includes(item)}
                                        onChange={() => toggleReforma(item)}
                                    />
                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Status + Urgência */}
                    <div className="linha-dupla">

                        {/* Status */}
                        <div className="card-contato">
                            <h2>Qual o status da obra?</h2>
                            {statusObra.map((item) => (
                                <label key={item} className="checkbox-line">
                                    <input
                                        type="radio"
                                        name="status"
                                        checked={statusSelecionado === item}
                                        onChange={() => setStatusSelecionado(item)}
                                    />
                                    <span>{item}</span>
                                </label>
                            ))}

                        </div>

                        {/* Urgência */}
                        <div className="card-contato">
                            <h2>Qual a sua urgencia para o projeto?</h2>
                            {urgencia.map((item) => (
                                <label key={item} className="checkbox-line">
                                    <input
                                        type="checkbox"
                                        checked={urgenciasSelecionadas.includes(item)}
                                        onChange={() => toggleUrgencia(item)}
                                    />

                                    <span>{item}</span>
                                </label>
                            ))}
                            {/* BOTÃO WHATSAPP */}
                            <button className="btn-whatsapp" onClick={enviarWhatsApp}>
                                <FaWhatsapp size={22} />
                                Enviar pelo WhatsApp
                            </button>
                        </div>

                    </div>



                </div>

                {/* ------ LADO DIREITO ------- */}
                <div className="contato-right">
                    <img src={heroImg} alt="Foto" className="contato-foto" />

                </div>


            </div>

        </section>


    );
}
