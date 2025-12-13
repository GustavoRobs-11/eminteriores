import Gallery from "../../Comuns/Gallery";

import Banheiro1 from "../../img/Portfolio/banheiro/banheiro1.png";
import Banheiro2 from "../../img/Portfolio/banheiro/banheiro2.png";
import Banheiro3 from "../../img/Portfolio/banheiro/banheiro3.png";
import Banheiro4 from "../../img/Portfolio/banheiro/banheiro4.png";
import Banheiro5 from "../../img/Portfolio/banheiro/banheiro5.png";



const BanheiroImages = [Banheiro1, Banheiro2, Banheiro3, Banheiro4, Banheiro5];

const Banheiro = () => {
  return <Gallery images={BanheiroImages} title="Banheiro" />;
};

export default Banheiro;
