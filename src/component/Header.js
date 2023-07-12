import {Link} from "react-router-dom";

export default function Header() {
  
  const menuHandler=()=>{
    const ul = document.querySelector('ul')
    ul.classList[0]? ul.classList.remove('hide') : ul.classList.add('hide')
  }

  return (
    <header>
      <button className="LogoAndText">
        <Link to="*">
          <img src="../../public/images/logo.png" alt="로고(메인으로 이동)" />
          COZ Shopping
        </Link>
      </button>
      <button onClick={menuHandler} className="menuBtn material-symbols-outlined">menu</button>
        <ul className="hide">
          <li>name님, 안녕하세요!</li>
          <li className="material-symbols-outlined"><Link to="/products/list" className="giftbox">redeem 상품리스트 페이지</Link></li>
          <li className="material-symbols-outlined"><Link to="/bookmark" className="star">star 북마크 페이지</Link></li>
        </ul>
    </header>
  );
}