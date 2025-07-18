import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";
import QuemSomos from "../../sections/Home/QuemSomos/QuemSomos";
import NosAcompanhe from "../../components/NosAcompanhe/NosAcompanhe";
import ComoAquecer from "../../sections/Home/ComoAquecer/ComoAquecer";
import Footer from "../../components/Footer/Footer";
import IconeWhatsApp from "../../components/IconeWhatsApp/IconeWhatsApp";

function Home(){
    return(
        <div>
            <HomeNavbar/>
            <QuemSomos/>
            <ComoAquecer/>
            <NosAcompanhe/>
            <Footer/>
            <IconeWhatsApp/>
        </div>
    );
}

export default Home;