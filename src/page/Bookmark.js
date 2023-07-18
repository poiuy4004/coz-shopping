import BookmarkList from "../component/BookmarkList"
import Filter from "../component/Filter"

export default function Bookmark({filter, setFilter, setFilterHandler, list, marked, setMarked, modalImg, setModalImg, oneItems}){
  return(
    <article>
      <Filter filter={filter} setFilter={setFilter} setFilterHandler={setFilterHandler} marked={marked} setMarked={setMarked} oneItems={oneItems} />
      <div className='itemContainer'>
      {filter==='All'?
        list?.map((item)=>{
          if(sessionStorage.getItem(item.id)==='true'){
            return <BookmarkList item={item} marked={marked} setMarked={setMarked} modalImg={modalImg} setModalImg={setModalImg} /> 
          }
        })
        : list?.filter(item=>item.type===filter).map((item)=>{
          if(sessionStorage.getItem(item.id)==='true'){
            return <BookmarkList item={item} marked={marked} setMarked={setMarked} modalImg={modalImg} setModalImg={setModalImg} /> 
          }
        })
      }
      </div>
    </article>
  )
}