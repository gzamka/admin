import './App.css';
import { Products } from './products/Products';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpecificProduct } from './products/SpecificProduct';
import News from './news/News';
import Newsdetail from './news/Newsdetail';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
//Pages
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import { Language } from './languageContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Language>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:slug" element={<SpecificProduct/>} />
          <Route path="/news" element={<News/>} />
          <Route path="news/:slug" element={<Newsdetail />} />
        </Routes>
      </Language>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
