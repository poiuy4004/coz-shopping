import Filter from "../component/Filter"
import List from "../component/List"

export default function ProdectsList({filter, setFilter, setFilterHandler, list}){
  const items = list.slice(0,4)
  
  return(
    <article>
      <Filter filter={filter} setFilter={setFilter} setFilterHandler={setFilterHandler} items={items}/>
      <div className='itemContainer'>
        {items.map((item)=>{
          return <List item={item} />
      })}
      </div>
    </article>
  )
}