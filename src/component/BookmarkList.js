import './List.css'

export default function BookmarkList({item, marked, setMarked}){
  const marking=(e)=>{
    setMarked(!marked)
    sessionStorage.setItem(item.id,marked)
    sessionStorage.getItem(item.id)==='true'? e.target.classList.add(marked) : e.target.classList.remove('true')
  }
  return(
    <section id='itemBox'>
      <div className='itemImg'>
        <img className='itemImg' src={item.image_url || item.brand_image_url} alt={item.title || item.brand_name} />
        <i className='bookmarker fa-solid fa-star true' onClick={marking}></i>
      </div>
      <div className='description'>
        <span className='title'>{item.title || item.brand_name}</span>
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