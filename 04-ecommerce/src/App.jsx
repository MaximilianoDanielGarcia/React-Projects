import { useState } from 'react';
import './App.css'
import { Products } from './components/product/products';
import { Header } from './components/header/header';
import productsData from './mocks/products.json';

function App() {

  const products = productsData.results;
  const [filters, setFilters] = useState({
    condition: 'new',
    minPrice: 0
  })

  const filterProducts = (products) => {

    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (
          filters.condition === 'all' ||
          product.condition === filters.condition
        )
      )
    })
  }

  const filteredProducts = filterProducts(products);

  return (
    <>
      
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
