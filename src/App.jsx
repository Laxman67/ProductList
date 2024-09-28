import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './store/productSlice';


const App = () => {

  const {products,categories} = useSelector(state=>state.product)

  const disptach = useDispatch()
  useEffect(()=>{
    disptach(getAllProducts())

    
  },[])
  console.log(products);
  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Products</h3>
      <div style={styles.grid}>
        {products.map(product => (
          <div key={product.id} style={styles.card}>
            <div style={{position:"absolute",top:"4px",right:"5px",backgroundColor:"green",color:"white",padding:"7px",borderTopLeftRadius:"20px"}} >{product.category}</div>
            <img src={product.images[0]} alt={product.title} style={styles.image} />
            <h4 style={styles.title}>{product.title}</h4>
            <p style={styles.description}>{product.description}</p>
          </div>
        ))}
      </div>
      <button  style={styles.button}>Load More</button>
    </div>
  );
}



const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    textAlign: 'left',
    transition: 'transform 0.3s',
    position:'relative'
  },
  cardHover: {
    transform: 'scale(1.05)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    marginBottom: '15px',
  },
  title: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem',
    color: '#777',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};


export default App;
