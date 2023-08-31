import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export function useSearch () {

    const [search, updateSearch] = useState('');
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true);

    useEffect(() => {

        if(isFirstInput.current){
            isFirstInput.current = search === ''
            return
        }

        if(search === ''){
            setError('No has ingresado nada...');
            return
          }
      
          if(search?.length < 3){
            setError('La búsqueda debe tener al menos 3 letras');
            return
          }
      
          setError(null);

    }, [search])

    return { search, updateSearch, error}
}