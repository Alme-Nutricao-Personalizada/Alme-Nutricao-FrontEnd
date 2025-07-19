import Footer from "../../components/Footer/Footer";
import EntreEmContato from "../../sections/EntreEmContato/EntreEmContato";
import Navbar from "../../components/Navbar/Navbar";
import '../page.css';

function Contato() {
    return (
        <div className='page'>
            <Navbar />
            <EntreEmContato />
            <Footer />
        </div>
    )
}

export default Contato;