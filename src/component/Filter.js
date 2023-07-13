export default function Filter({setFilterHandler, items}){

  return(
    <section className="filterBox">
      <button className="filterBtn" onClick={setFilterHandler}><img src={items[0].image_url || items[0].brand_image_url} className="filterImg" alt="" />전체</button>
      <button className="filterBtn" name="Product" onClick={setFilterHandler}><img src={items[0].image_url || items[0].brand_image_url} className="filterImg" alt="" />상품</button>
      <button className="filterBtn" name="Category" onClick={setFilterHandler}><img src={items[0].image_url || items[0].brand_image_url} className="filterImg" alt="" />카테고리</button>
      <button className="filterBtn" name="Exhibition" onClick={setFilterHandler}><img src={items[0].image_url || items[0].brand_image_url} className="filterImg" alt="" />기획전</button>
      <button className="filterBtn" name="Brand" onClick={setFilterHandler}><img src={items[0].image_url || items[0].brand_image_url} className="filterImg" alt="" />브랜드</button>
    </section>
  )
}