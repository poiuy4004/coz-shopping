import Filter from "../component/Filter"
import List from "../component/List"

export default function ProdectsList({filter, setFilter, setFilterHandler, list}){
  const items = list.filter(item=>item.type===filter).slice(0,4)
  
  return(
    <article>
      <Filter filter={filter} setFilter={setFilter} setFilterHandler={setFilterHandler} />
      {items.map((item)=>{
        return <List item={item} />
      })}
    </article>
  )
}