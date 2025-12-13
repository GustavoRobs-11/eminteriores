import Gallery from "../../Comuns/Gallery";

import Quarto1 from "../../img/Portfolio/quarto/quarto1.png";
import Quarto2 from "../../img/Portfolio/quarto/quarto2.png";
import Quarto4 from "../../img/Portfolio/quarto/quarto4.png";




const QuartoImages = [Quarto1, Quarto2, Quarto4];

const Quarto = () => {
  return <Gallery images={QuartoImages} title="Quarto" />;
};

export default Quarto;
