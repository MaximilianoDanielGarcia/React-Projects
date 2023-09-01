import { Filters } from "../filters/filters"
import './header.css';

export function Header (){
    return (
        <header>
            <h1>Mercadolibre 🛒</h1>
            <section className="filter-section">
                <h3>Filtros</h3>
                <Filters />
            </section>
        </header>
    )
}