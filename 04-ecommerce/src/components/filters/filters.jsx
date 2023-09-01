import { useState } from 'react'
import './filters.css'

export function Filters (){

    const [minPrice, setMinPrice] = useState(0);

    const handleChangePrice = (event) => {
        setMinPrice(event.target.value);
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio desde:</label>
                <input type="range" 
                       name="price" 
                       id="price" 
                       min={0} 
                       max={150000} 
                       onChange={handleChangePrice}/>
                
                <span><strong>${minPrice}</strong></span>
            </div>

            <div>
                <label htmlFor="condition">Condición:</label>
                <select name="condition" id="condition">
                    <option value="all">Todos</option>
                    <option value="new">Nuevo</option>
                    <option value="used">Usado</option>
                </select>
            </div>
        </section>
    )
}