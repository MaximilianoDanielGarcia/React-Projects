import { useCatImage } from '../hooks/useCatImage'
import { useCatFact } from '../hooks/useCatFact';

export function FactCat() {

    const { fact, refreshFact } = useCatFact();
    const { imageUrl } = useCatImage({ fact });

    function handleClick (){
        refreshFact();
    }

    return (
        <>
    
          <main>
              <h2>Google Cats</h2>
              { fact && <p>{fact}</p>}
              { imageUrl && <img src={imageUrl} alt="Imagen extracted" />}
              <button onClick={handleClick}>New fact</button>
          </main>
          
        </>
    )
}