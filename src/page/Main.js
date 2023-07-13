import List from '../component/List'
import BookmarkList from '../component/BookmarkList'
import { useEffect, useState } from 'react'

export default function Main({ list }){
  const [items, setItems] = useState([])
  useEffect(()=>{
    setItems([list.filter(item=>item.type==='Prodect')[0],list.filter(item=>item.type==='Category')[0],list.filter(item=>item.type==='Exhibition')[0],list.filter(item=>item.type==='Brand')[0]])
  },[])
  return(
    <article id='main'>
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
            return <List item={item} />
          })}
        </dd>
      </dl>
      </section>
    </article>
  )
}