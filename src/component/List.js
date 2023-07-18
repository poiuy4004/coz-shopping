import './List.css'

// // redux 실패
// import {useDispatch, useSelector} from 'react-redux'
// import {mkd, mking} from '../App'

export default function List({item, marked, setMarked, modalImg, setModalImg}){
  const modalHandler=(e)=>{
    console.log(e.target)
    return(
    <section className='modalBox'>
      <i className="modalX fa-solid fa-xmark whiteTxt"></i>
      <img className='modalImg' src={modalImg} />
      <i className={sessionStorage.getItem(item.id)==='true'? 'modalStar bookmarker fa-solid fa-star whiteTxt true' : 'modalStar bookmarker fa-solid fa-star whiteTxt'} onClick={marking}></i>
      <p className='modalTxt'>{item.title || '#'+item.brand_name}</p>
    </section>
    )
  }
  const marking=(e)=>{
    setMarked(!marked)
    sessionStorage.setItem(item.id,marked)
    sessionStorage.getItem(item.id)==='true'? e.target.classList.add(marked) : e.target.classList.remove('true')
    // // redux 실패
    // dispatch(mking())
  }
  
  return(
    <section id='itemBox' onClick={modalHandler} name={item.image_url || item.brand_image_url}>
      <div className='itemImg'>
        <img className='itemImg' src={item.image_url || item.brand_image_url} alt={item.title || item.brand_name} />
        <i className={sessionStorage.getItem(item.id)==='true'? 'bookmarker fa-solid fa-star true' : 'bookmarker fa-solid fa-star'} onClick={marking}></i>
      </div>
      <div className='description'>
        <span className='title'>{item.title || '#'+item.brand_name}</span>
        {item.discountPercentage? <span className='persent'>{item.discountPercentage+`%`}</span> : null}
        {item.follower? <span className='title'>관심고객수</span> : null}
      </div>
      <div className='description'>
        <span className='sub'>{item.sub_title}</span>
        <span className='follower'>{item.price? item.price+`원` : item.follower}</span>
      </div>
    </section>
  )
}