import Main from './page/Main';
import ProdectsList from './page/ProductList';
import Bookmark from './page/Bookmark';

import Header from './component/Header';
import Footer from './component/Footer';

import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
  const [modalImg, setModalImg] = useState('')
  const [marked, setMarked] = useState(true)
  const [filter, setFilter] = useState('')
  const setFilterHandler = (e) => {
    setFilter(e.target.name)
    console.log(`type:`, e.target.name)
  }
  const [list, setList] = useState([])
  useEffect(()=>{
    fetch('http://cozshopping.codestates-seb.link/api/v1/products')
      .then(res=>res.json())
      .then(list=>{
        return setList(list)
      })
      .catch(err=>console.log(err))
  },[])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="*" element={<Main list={list} marked={marked} setMarked={setMarked} modalImg={modalImg} setModalImg={setModalImg} />} />
      <Route path="/products/list" element={<ProdectsList filter={filter} setFilter={setFilter} setFilterHandler={setFilterHandler} list={list} marked={marked} setMarked={setMarked} modalImg={modalImg} setModalImg={setModalImg} />} />
      <Route path="/bookmark" element={<Bookmark filter={filter} setFilter={setFilter} setFilterHandler={setFilterHandler} list={list} marked={marked} setMarked={setMarked} modalImg={modalImg} setModalImg={setModalImg} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}