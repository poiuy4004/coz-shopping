import './List.css'
export default function List({item}){
  return(
    <section>
      <img src={item.image_url} alt={item.title} />
      <div>
        <span className='title'>{item.title}</span>
        <span className='persent'>{item.discountPersentage}</span>
      </div>
      <div>
        <span className='sub'>{item.sub_title}</span>
        <span className='follower'>{item.follower}</span>
      </div>
    </section>
  )
}