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
import { useState } from 'react';
import { useCustomhook } from './useCustomhook';

function App() {
  const [language, setlanguage] = useState(10);
  const handleChange = (event) => setlanguage(event.target.value);
  const { data } = useCustomhook("products")
  const news = useCustomhook('news')
  // console.log(language);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar handleChange={handleChange} language={language} />
      <Routes>
        <Route path="/" element={<Home docs={data} language={language} />} />
        <Route path="/products" element={<Products docs={data} />} />
        <Route path="/products/:slug" element={<SpecificProduct docs={data} />} />
        <Route path="/news" element={<News docs={news} />} />
        <Route path="news/:slug" element={<Newsdetail docs={news} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
