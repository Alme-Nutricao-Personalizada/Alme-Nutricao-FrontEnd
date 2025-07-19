import Navbar from "../../components/Navbar/Navbar";
import ExisteUmCaminho from "../../sections/QuemSomos/ExisteUmCaminho/ExisteUmCaminho";
import OndeTudoComecou from "../../sections/QuemSomos/OndeTudoComecou/OndeTudoComecou";
import Historia from "../../sections/QuemSomos/Historia/Historia";
import Footer from "../../components/Footer/Footer";
import '../page.css';

function QuemSomos() {
  return (
    <div className='page'>
      <Navbar />
      <OndeTudoComecou />
      <ExisteUmCaminho />
      <Historia />
      <Footer />
    </div>
  );
}

export default QuemSomos;
