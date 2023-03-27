import { useState, useEffect } from "react"

const CAT_ENDPOINT_RANDON_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL =  'https://cataas.com/cat/says/${firstword}?size=50&color=red&json=true'

export function App(){
    const [fact, setFact] = useState()

    // useEffect(()=>{},[]) OJO PENDIENTE CON CUANDO DE PONE EL useEffect []
    useEffect(()=>{
        fetch(CAT_ENDPOINT_RANDON_FACT)
            .then(res => res.json())
            .then(data => setFact(data.fact))
    }, [])

    

    return(
        <main>
    <h1>App de Gatitos</h1>
    {/* <p>{fact}</p> */}
    {fact && <p>{fact}</p>}
    </main>
    )
}