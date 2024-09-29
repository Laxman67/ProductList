const j = () => {
  const filteredProducts = [];
  const products = [];
  return (
    <div>
      {products
        ? products &&
          products.map((element) => (
            <div key={element.id} className='product'>
              <span className='tag'>{element.category}</span>
              <img
                src={element.thumbnail}
                style={{ width: '100px' }}
                alt={element.title}
              />
              <h4>{element.title}</h4>
              <div
                style={{
                  marginTop: '5px',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '10px',
                }}
              >
                Price: <b>${element.price}</b>
                Rating:{' '}
                <i>
                  <b>{element.rating}</b>
                </i>
              </div>
            </div>
          ))
        : filteredProducts &&
          filteredProducts.map((element) => (
            <div key={element.id} className='product'>
              <span className='tag'>{element.category}</span>
              <img
                src={element.thumbnail}
                style={{ width: '100px' }}
                alt={element.title}
              />
              <h4>{element.title}</h4>
              <div
                style={{
                  marginTop: '5px',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '10px',
                }}
              >
                Price: <b>${element.price}</b>
                Rating:{' '}
                <i>
                  <b>{element.rating}</b>
                </i>
              </div>
            </div>
          ))}
    </div>
  );
};

export default j;
