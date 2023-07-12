import Main from './page/Main';
import ProdectsList from './page/ProductList';
import Bookmark from './page/Bookmark';

import Header from './component/Header';
import Footer from './component/Footer';

import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
  const [filter, setFilter] = useState("")
  const setFilterHandler = (e) => {
    setFilter(e.target.name)
    console.log(`type:`, e.target.name)
  }

  const [list, setList] = useState([])
  const get=()=>{
    return new Promise((res,rej)=>{
      fetch('http://cozshopping.codestates-seb.link/api/v1/products?count=10')
      .then(res=>res.json())
      .then(list=>{
        return res(list)
      })
      .catch(err=>console.log(err))
    })
  }
  const getList=async()=>{
    return setList(await get())
  }
  useEffect(()=>{getList()},[])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="*" element={<Main filter={filter} list={list} />} />
      <Route path="/products/list" element={<ProdectsList filter={filter} setFilter={setFilter} setFilterHandler={setFilterHandler} list={list} />} />
      <Route path="/bookmark" element={<Bookmark filter={filter} setFilter={setFilter} setFilterHandler={setFilterHandler} list={list} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}