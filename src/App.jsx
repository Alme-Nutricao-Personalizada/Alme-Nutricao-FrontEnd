import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import QuemSomos from './pages/QuemSomos/QuemSomos';
import Contato from './pages/Contato/Contato';
import ComoAquecer from './pages/ComoAquecer/ComoAquecer';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade/PoliticaPrivacidade';
import AquecimentoPorCategoria from './sections/ComoAquecer/AquecimentoPorCategoria/AquecimentoPorCategoria';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/comoAquecer" element={<ComoAquecer />} />
        <Route path="/contato" element={<Contato />} />
        <Route path='/politicaPrivacidade' element={<PoliticaPrivacidade />} />
        <Route path='/AquecimentoPorCategoria' element={<AquecimentoPorCategoria />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;