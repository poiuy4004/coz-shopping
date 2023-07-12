import List from '../component/List'
import BookmarkList from '../component/BookmarkList'

export default function Main({filter, list}){
  const items = list.filter(item=>item.type===filter).slice(0,4)

  return(
    <article>
      <section>
      <dl>
        <dt>상품 리스트</dt>
        <dd>
          {items.map((item)=>{
            return <List item={item} />
          })}
        </dd>
        <dt>북마크 리스트</dt>
        <dd>
          {items.map((item)=>{
            <BookmarkList item={item} />
          })}
        </dd>
      </dl>
      </section>
    </article>
  )
}