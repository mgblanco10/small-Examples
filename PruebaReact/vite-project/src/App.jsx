import { useState, useEffect } from "react"
import './App.css' 

const CAT_ENDPOINT_RANDON_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL =  'https://cataas.com/cat/says/${firstword}?size=50&color=red&json=true'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App(){
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    // useEffect(()=>{},[]) OJO PENDIENTE CON CUANDO SE PONE EL useEffect []
    useEffect(()=>{
        fetch(CAT_ENDPOINT_RANDON_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

                //si fuera primera palabra only split
                const firstword = fact.split(' ', 3).join(' ')
                console.log(firstword)
                //si fueran tres primeras palabras por ejemplo
                // const firstword = fact.split(' ').slice(0,3).join('')
                // const firstword = fact.split(' ', 3).join('')
                // console.log(firstword)
                fetch(`https://cataas.com/cat/says/${firstword}?size=50&color=red&json=true`)
                    .then(res => res.json())
                    .then(response => {
                        // console.log(response)
                        const { url} = response
                        // setImageUrl(`https://cataas.com${url}`) y en src = imageUrl
                        setImageUrl(url)
                    })
            })
    }, [])



    return(
        <main style={{ display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', maxWidth: '500px', fontFamily:'sans-serif', margin:'0 auto'}}>
            <h1>App de Gatitos</h1>
                {/* <p>{fact}</p> */}
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first trhee words for ${fact}`}/>}
        </main>
    )
}

