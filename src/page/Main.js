import BookmarkList from '../component/BookmarkList'
import List from '../component/List'

export default function Main({ list, marked, setMarked, modalImg, setModalImg }){
  // const productList = list.filter(i=>i.type==='Product');
  // const categoryList = list.filter(i=>i.type==='Category');
  // const exhibitionList = list.filter(i=>i.type==='Exhibition');
  // const brandList = list.filter(i=>i.type==='Brand');
  // const items = (productList && categoryList && exhibitionList && brandList)? [productList[0],categoryList[0],exhibitionList[0],brandList[0]] : list
  const items = list.slice(0,4)
  return(
    <article id='main'>
      <section>
      <dl>
        <dt>상품 리스트</dt>
        <dd>
          {items.map((item)=>{
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