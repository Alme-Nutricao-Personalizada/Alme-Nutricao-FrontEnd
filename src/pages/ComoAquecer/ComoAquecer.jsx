import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import InstrucoesAquecimento from '../../sections/ComoAquecer/InstrucoesAquecimento/InstrucoesAquecimento';
import AquecimentoPorCategoria from '../../sections/ComoAquecer/AquecimentoPorCategoria/AquecimentoPorCategoria';
import ImagensAquecimentoPorCategoria from '../../sections/ComoAquecer/ImagensAquecimentoPorCategoria/ImagensAquecimentoPorCategoria';

function ComoAquecer() {
    return (
        <div>
            <Navbar />
            <InstrucoesAquecimento />
            <ImagensAquecimentoPorCategoria/>
            <AquecimentoPorCategoria />
            <Footer />
        </div>
    )
}

export default ComoAquecer;