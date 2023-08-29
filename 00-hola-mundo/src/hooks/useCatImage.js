import { useEffect, useState } from "react";

export function useCatImage ({ fact }){

    const CAT_PREFIX_ENDPOINT_IMG = 'https://cataas.com';
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {

        if( !fact ) return;

        const firstThreeWords = fact.split(' ').slice(0, 3).join(' ');

        fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
         .then(res => res.json())
         .then(data => setImageUrl(data.url))

    }, [fact]);

    return { imageUrl: `${CAT_PREFIX_ENDPOINT_IMG}${imageUrl}` }
}