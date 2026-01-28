import { useState } from "react";
import "./../../styles/Portfolio/portfolio.css";

import imagem1 from "../../img/Portfolio/TourVirtual/image1.png";
import imagem2 from "../../img/Portfolio/TourVirtual/image2.png";
import imagem3 from "../../img/Portfolio/TourVirtual/image3.png";
import imagem4 from "../../img/Portfolio/TourVirtual/image4.png";
import imagem5 from "../../img/Portfolio/TourVirtual/image5.png";
import imagem6 from "../../img/Portfolio/TourVirtual/image6.png";
import imagem7 from "../../img/Portfolio/TourVirtual/image7.png";
import imagem8 from "../../img/Portfolio/TourVirtual/image8.png";
import imagem9 from "../../img/Portfolio/TourVirtual/image9.png";
import imagem10 from "../../img/Portfolio/TourVirtual/image10.png";
import imagem11 from "../../img/Portfolio/TourVirtual/image11.png";

const tours = [
  { id: 1, cliente: "Odair Brito", imagem: imagem1, link: "https://tour.meupasseiovirtual.com/view/4NQ91zLqbCL" },
  { id: 2, cliente: "Carolina", imagem: imagem2, link: "https://tour.meupasseiovirtual.com/view/abi5ok3TVGp" },
  { id: 3, cliente: "Gabriel e Monalisa", imagem: imagem3, link: "https://tour.meupasseiovirtual.com/view/bmwpLvyyAU1" },
  { id: 4, cliente: "João Gazar", imagem: imagem4, link: "https://tour.meupasseiovirtual.com/view/wDYnWVZl7uy" },
  { id: 5, cliente: "JM Móveis", imagem: imagem5, link: "https://tour.meupasseiovirtual.com/view/QBFaiUyJo50" },
  { id: 6, cliente: "Pedro e Emilly", imagem: imagem6, link: "https://tour.meupasseiovirtual.com/view/0TnJmnHfmUS" },
  { id: 7, cliente: "Filipe e Nicoly", imagem: imagem7, link: "https://tour.meupasseiovirtual.com/view/wDITc9bGCAZ" },
  { id: 8, cliente: "Sylvio Lima", imagem: imagem8, link: "https://tour.meupasseiovirtual.com/view/Apr7KZUulJi" },
  { id: 9, cliente: "Izabela Wicher", imagem: imagem9, link: "https://tour.meupasseiovirtual.com/view/1gPlvbAoihb" },
  { id: 10, cliente: "Apartamento Quiteria", imagem: imagem10, link: "https://tour.meupasseiovirtual.com/view/SfruCn5manb" },
  { id: 11, cliente: "Apartamento Kaline", imagem: imagem11, link: "https://tour.meupasseiovirtual.com/view/aQ4i0UiiBrm" },
];

export default function TourVirtual() {
  const [imagemAtiva, setImagemAtiva] = useState(null);

  return (
    <>
      <section className="tour-section">
        <h2 className="tour-title">Tours Virtuais</h2>

        <div className="tour-carousel">
          {tours.map((tour) => (
            <div className="tour-card" key={tour.id}>
              <img
                src={tour.imagem}
                className="tour-image"
                alt={tour.cliente}
                onClick={() => setImagemAtiva(tour.imagem)}
              />

              <div className="tour-content">
                <p>
                  Cliente:
                  <br />
                  {tour.cliente}
                </p>

                <a
                  href={tour.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tour-button"
                >
                  Acessar Tour
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {imagemAtiva && (
        <div className="tour-modal" onClick={() => setImagemAtiva(null)}>
          <button
            className="tour-modal-close"
            onClick={() => setImagemAtiva(null)}
          >
            ✕
          </button>

          <img
            src={imagemAtiva}
            className="tour-modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
