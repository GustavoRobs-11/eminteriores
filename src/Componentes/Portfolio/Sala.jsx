import Gallery from "../../Comuns/Gallery";

import sala1 from "../../img/Portfolio/sala/areasocial1.png";
import sala2 from "../../img/Portfolio/sala/areasocial2.png";
import sala3 from "../../img/Portfolio/sala/areasocial3.png";
import sala4 from "../../img/Portfolio/sala/areasocial4.png";
import sala5 from "../../img/Portfolio/sala/areasocial5.png";
import sala6 from "../../img/Portfolio/sala/areasocial6.png";
import sala7 from "../../img/Portfolio/sala/areasocial7.png";
import "../../styles/Portfolio/Portfolio.css";


const salaImages = [sala1, sala5, sala3, sala4, sala2, sala6, sala7];

const Sala = () => {
  return <Gallery images={salaImages} title="Sala" />;
};

export default Sala;
