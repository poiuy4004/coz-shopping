import Filter from "../component/Filter"
import List from "../component/List"

export default function ProdectsList({filter, setFilter, setFilterHandler, list, marked, setMarked, modalImg, setModalImg}){
  const items = list.slice(0,4)
  
  return(
    <article>
      <Filter filter={filter} setFilter={setFilter} setFilterHandler={setFilterHandler} items={items} marked={marked} setMarked={setMarked} />
      <div className='itemContainer'>
        {items.map((item)=>{
          return <List item={item} marked={marked} setMarked={setMarked} modalImg={modalImg} setModalImg={setModalImg} />
      })}
      </div>
    </article>
  )
}