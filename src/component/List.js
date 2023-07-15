import './List.css'

export default function List({item, marked, setMarked, modalImg, setModalImg}){
  const modalHandler=(e)=>{
    let popImg = e.target.name
    let backgroundBlack = document.querySelector('.modalBox')
    
  }
  const marking=(e)=>{
    setMarked(!marked)
    sessionStorage.setItem(item.id,marked)
    sessionStorage.getItem(item.id)==='true'? e.target.classList.add(marked) : e.target.classList.remove('true')
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
      <section className='modalBox'>
        <i class="fa-solid fa-xmark whiteTxt"></i>
        <i className={sessionStorage.getItem(item.id)==='true'? 'bookmarker fa-solid fa-star whiteTxt true' : 'bookmarker fa-solid fa-star whiteTxt'} onClick={marking}></i>
        <p>{item.title || '#'+item.brand_name}</p>
        <img className='modalImg' src={modalImg} />
      </section>
    </section>
  )
}