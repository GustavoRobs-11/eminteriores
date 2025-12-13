import Gallery from "../../Comuns/Gallery";

import Varanda1 from "../../img/Portfolio/varanda/varanda1.png";
import Varanda3 from "../../img/Portfolio/varanda/varanda3.png";
import Varanda4 from "../../img/Portfolio/varanda/varanda4.png";




const VarandaImages = [Varanda1, Varanda3, Varanda4];

const Varanda = () => {
  return <Gallery images={VarandaImages} title="Varanda" />;
};

export default Varanda;
