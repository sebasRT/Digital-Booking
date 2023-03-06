import React, { useEffect, useState } from 'react'

export const useMedia = () => {

    const media = window.matchMedia("(max-width:670px)");
    const [matches, setMatches] = useState(media.matches)


    const handler = (e)=>{
        setMatches(media.matches)
    };

    useEffect(()=>{
    media.addEventListener('change', handler)
    return ()=>media.removeEventListener('change',handler)
    },[])

  return (matches);
}
