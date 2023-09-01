import './products.css'
// eslint-disable-next-line react/prop-types
export function Products ({ products }) {

    return (
        <main className="products-catalog">
            <ul>
                {
                    // eslint-disable-next-line react/prop-types
                    products.slice(0, 20).map(product => (

                        <li key={product.id} className='card'>
                            <h3 className='heading'>{product.title}</h3>
                            <img src={product.thumbnail} alt={product.title} />
                            <p><strong>$ {product.price}</strong></p>
                            <button>Comprar 🛒</button>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}