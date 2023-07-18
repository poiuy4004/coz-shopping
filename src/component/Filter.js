import all from '../assets/type-all.png';
import brand from '../assets/type-brand.png';
import category from '../assets/type-category.png';
import exhibition from '../assets/type-exhibition.png';
import product from '../assets/type-product.png';

export default function   ({ setFilterHandler, oneItems }) {
  return (
    <section className='filterBox'>
      <button className='filterBtn' name='All' onClick={setFilterHandler}>
        <img
          src={all}
          className='filterImg'
          alt=''
          name='All'
        />
        전체
      </button>
      <button className='filterBtn' name='Product' onClick={setFilterHandler}>
        <img
          src={brand}
          className='filterImg'
          alt=''
          name='Product'
        />
        상품
      </button>
      <button className='filterBtn' name='Category' onClick={setFilterHandler}>
        <img
          src={category}
          className='filterImg'
          alt=''
          name='Category'
        />
        카테고리
      </button>
      <button
        className='filterBtn'
        name='Exhibition'
        onClick={setFilterHandler}
      >
        <img
          src={exhibition}
          className='filterImg'
          alt=''
          name='Exhibition'
        />
        기획전
      </button>
      <button className='filterBtn' name='Brand' onClick={setFilterHandler}>
        <img
          src={product}
          className='filterImg'
          alt=''
          name='Brand'
        />
        브랜드
      </button>
    </section>
  );
}
