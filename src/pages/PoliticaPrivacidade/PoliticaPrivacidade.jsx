import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ConhecaPoliticaPrivacidade from "../../sections/ConhecaPoliticaPrivacidade/ConhecaPoliticaPrivacidade";
import '../page.css';

function PoliticaPrivacidade() {
    return (
        <div className='page'>
            <Navbar />
            <ConhecaPoliticaPrivacidade />
            <Footer />
        </div>
    )
}

export default PoliticaPrivacidade;