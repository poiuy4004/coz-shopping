export default function Filter({setFilterHandler, oneItems}){
  return(
    <section className="filterBox">
      <button className="filterBtn" name="All" onClick={setFilterHandler}><img src={oneItems[0].image_url || oneItems[0].brand_image_url} className="filterImg" alt="" name="All" />전체</button>
      <button className="filterBtn" name="Product" onClick={setFilterHandler}><img src={oneItems[0].image_url || oneItems[0].brand_image_url} className="filterImg" alt="" name="Product" />상품</button>
      <button className="filterBtn" name="Category" onClick={setFilterHandler}><img src={oneItems[0].image_url || oneItems[0].brand_image_url} className="filterImg" alt="" name="Category" />카테고리</button>
      <button className="filterBtn" name="Exhibition" onClick={setFilterHandler}><img src={oneItems[0].image_url || oneItems[0].brand_image_url} className="filterImg" alt="" name="Exhibition" />기획전</button>
      <button className="filterBtn" name="Brand" onClick={setFilterHandler}><img src={oneItems[0].image_url || oneItems[0].brand_image_url} className="filterImg" alt="" name="Brand" />브랜드</button>
    </section>
  )
}