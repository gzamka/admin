import './App.css';
import { Products } from './products/Products';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpecificProduct } from './products/SpecificProduct';
import { useCustomhook } from './useCustomhook'
import News from './news/News';
import Newsdetail from './news/Newsdetail';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
//Pages
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
function App() {
  const { data } = useCustomhook("products")
  const news = useCustomhook('news')
  // console.log(data);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products docs={data} />} />
        <Route path="/products/:slug" element={<SpecificProduct docs={data} />} />
        <Route path="/news" element={<News docs={news.data} />} />
        <Route path="news/:slug" element={<Newsdetail docs={news.data} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
