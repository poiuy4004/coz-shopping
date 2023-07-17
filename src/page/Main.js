import BookmarkList from '../component/BookmarkList'
import List from '../component/List'

export default function Main({ list, marked, setMarked, modalImg, setModalImg, oneItems }){
  return(
    <article id='main'>
      <section>
      <dl>
        <dt>상품 리스트</dt>
        <dd>
          {oneItems.slice(0,4).map((item)=>{
            return <List item={item} marked={marked} setMarked={setMarked} modalImg={modalImg} setModalImg={setModalImg} />
          })}
        </dd>
        <dt>북마크 리스트</dt>
        <dd>
          {list.map((item)=>{
            if(sessionStorage.getItem(item.id)==='true'){
              return <BookmarkList item={item} marked={marked} setMarked={setMarked} modalImg={modalImg} setModalImg={setModalImg} /> 
            }
          })}
        </dd>
      </dl>
      </section>
    </article>
  )
}