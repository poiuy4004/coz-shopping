import Filter from '../component/Filter';
import List from '../component/List';

export default function ProdectsList({
  filter,
  setFilter,
  setFilterHandler,
  list,
  marked,
  setMarked,
  modalImg,
  setModalImg,
  oneItems,
}) {
  console.log(list);
  console.log(filter);
  return (
    <article>
      <Filter
        filter={filter}
        setFilter={setFilter}
        setFilterHandler={setFilterHandler}
        marked={marked}
        setMarked={setMarked}
        oneItems={oneItems}
      />
      <div className='itemContainer'>
        {filter === 'All'
          ? list.map((item, idx) => {
              return (
                <List
                  key={idx}
                  item={item}
                  marked={marked}
                  setMarked={setMarked}
                  modalImg={modalImg}
                  setModalImg={setModalImg}
                />
              );
            })
          : null}
        {filter === 'Product'
          ? list
              .filter((item) => item.type === filter)
              .map((item, idx) => {
                return (
                  <List
                  key={idx}
                    item={item}
                    marked={marked}
                    setMarked={setMarked}
                    modalImg={modalImg}
                    setModalImg={setModalImg}
                  />
                );
              })
          : null}
        {filter === 'Exhibition'
          ? list
              .filter((item) => item.type === filter)
              .map((item) => {
                return (
                  <List
                    item={item}
                    marked={marked}
                    setMarked={setMarked}
                    modalImg={modalImg}
                    setModalImg={setModalImg}
                  />
                );
              })
          : null}
        {filter === 'Category'
          ? list
              .filter((item) => item.type === filter)
              .map((item) => {
                return (
                  <List
                    item={item}
                    marked={marked}
                    setMarked={setMarked}
                    modalImg={modalImg}
                    setModalImg={setModalImg}
                  />
                );
              })
          : null}
        {filter === 'Brand'
          ? list
              .filter((item) => item.type === filter)
              .map((item) => {
                return (
                  <List
                    item={item}
                    marked={marked}
                    setMarked={setMarked}
                    modalImg={modalImg}
                    setModalImg={setModalImg}
                  />
                );
              })
          : null}
      </div>
    </article>
  );
}
