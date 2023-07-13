import './List.css'
export default function List({item}){
  return(
    <section id='itemBox'>
      <div>
        <img src={item.image_url || item.brand_image_url} alt={item.title || item.brand_name} />
        <input id={item.id} type='checkbox' />
          <label for={item.id} />
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