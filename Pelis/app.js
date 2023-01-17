// https://imdb8.p.rapidapi.com/auto-complete?q=frozen -->FROZEN
// https://imdb8.p.rapidapi.com/auto-complete?q=encanto --> ENCANTO

fetch("https://imdb8.p.rapidapi.com/auto-complete?q=frozen",{
    "method": "GET",
    "headers":{
        'X-RapidAPI-Key': '1cb56fc762mshc5095ac78bbf0e3p104de5jsn8e462a09cd8d',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
})
.then(response => response.json())
.then (data => {
    // console.log(data)
    const arrayMovies = data.d
    arrayMovies.map((element)=>{
        // console.log(element)
        const title = element.l
        const image = element.i.imageUrl
        const cast = element.s

        const card = `
        <div>
            <img src="${image}"/> 
            <h2> ${title}</h2>
            <p> ${cast}</p>

        </div>
        `
        document.getElementById('container').innerHTML += card

       
    })

})
.catch(err =>{
    console.error(err)
})






