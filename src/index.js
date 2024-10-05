import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeDetail from './pages/Component/Recipe/RecipeDetail'
import Faq from './pages/Component/Faq/Faq';
import StarRating from './pages/Component/Star-Rating/StarRating';
import ImageSlider from './pages/Component/Image-slider';
import LoadMore from './pages/Component/Load-More';
import QrcodeGenerator from './pages/Component/Qr-Code-Generator';
import ToDo from './pages/Component/ToDo';
import RandomQuotes from './pages/Component/RandomQuotes';
import ChangeBGColor from './pages/Component/ChangeBGColor';
import LoginRegister from './pages/Component/Authntication';
import Weather from './pages/Component/Weather';
import ColorPicker from './pages/Component/ColorPicker';
import Header from './pages/layout/Header';
import Footer from './pages/layout/Footer';
import ArrayMethods from './pages/Component/ArrayMethods';
import DemoClass from './test';
import TicTacToe from './pages/Component/TicTacToe';
import ImageSliderApi from './pages/Component/Image-slider/ImageSliderApi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <BrowserRouter >
    <Header />
      <Routes>
        
        <Route path='/' element={<App />} />
        <Route path='/recipe/deatil/:id' element={<RecipeDetail />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/star-rating' element={<StarRating NoOfStar={10} />} />
        <Route path='/image-slider' element={<ImageSlider url="https://picsum.photos/v2/list" page={"1"} limit={10} />} />
        <Route path='/load-more' element={<LoadMore />} />
        <Route path='/qr-code' element={<QrcodeGenerator />} />
        <Route path='/todo' element={<ToDo />} />
        <Route path='/random-quotes' element={<RandomQuotes url="https://dummyjson.com/quotes" page={"1"} limit={30} />} />
        <Route path='/changeBG' element={<ChangeBGColor />} />
        <Route path='/login-register' element={<LoginRegister />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/color-picker' element={<ColorPicker />} />
        <Route path="/array-methods" element={<ArrayMethods />} />
        <Route path="/test" element={<DemoClass />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/imageslider" element={<ImageSliderApi />} />


      </Routes>
      <Footer />
      
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
