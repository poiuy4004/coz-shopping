import Main from './page/Main';
import ProdectsList from './page/ProductList';
import Bookmark from './page/Bookmark';

import Header from './component/Header';
import Footer from './component/Footer';

import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// // redux 실패 - useState 값은 어떻개 넘겨줄 수 있는가?
// import { Provider } from "react-redux";
// import { legacy_createStore } from "@reduxjs/toolkit";

// export const mkd=()=>{tt: 'MARKED'};
// export const mking=()=>{tt: 'MKING'};
// //

export default function App() {
  const [modalImg, setModalImg] = useState('')
  const [marked, setMarked] = useState(true)
  const [filter, setFilter] = useState('All')
  const setFilterHandler = (e) => {
    setFilter(e.target.name)
    console.log(e.target.name)
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
  const oneItems = list


// // redux 실패
//   const Recuser = (state,action)=>{
//     switch(action.tt){
//       case 'MARKED':
//         return state = marked
//       case 'MKING':
//         setMarked(!marked)
//         sessionStorage.setItem(item.id,marked)
//         sessionStorage.getItem(item.id)==='true'? e.target.classList.add(marked) : e.target.classList.remove('true')
//       default:
//         return state
//     }
//   }
//



  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="*" element={<Main list={list} marked={marked} setMarked={setMarked} modalImg={modalImg} setModalImg={setModalImg} oneItems={oneItems} />} />
      <Route path="/products/list" element={<ProdectsList filter={filter} setFilter={setFilter} setFilterHandler={setFilterHandler} list={list} marked={marked} setMarked={setMarked} modalImg={modalImg} setModalImg={setModalImg} oneItems={oneItems} />} />
      <Route path="/bookmark" element={<Bookmark filter={filter} setFilter={setFilter} setFilterHandler={setFilterHandler} list={list} marked={marked} setMarked={setMarked} modalImg={modalImg} setModalImg={setModalImg} oneItems={oneItems} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}