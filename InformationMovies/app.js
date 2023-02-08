const APIKEY = process.env.APIKEY

function capturaWord(){
    document.getElementById('container').innerHTML=''
    let word =document.getElementById('word').value
    
    if (word==""){
        alert("You must write a mandatory actor or movie to search for information")
        document.getElementById('word').focus()
    }else{
        console.log(word)
        document.getElementById('word').value=""
        fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${word}`,{
            "method": "GET",
            "headers":{
                'X-RapidAPI-Key':'1cb56fc762mshc5095ac78bbf0e3p104de5jsn8e462a09cd8d',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then (data => {
            console.log(data)
            const arrayMovies = data.d
            arrayMovies.map((element)=>{
                // console.log(element)
                const title = element.l
                const information = element.qid
                const image = element.i.imageUrl
                const cast = element.s
                
                const card = `
                <div>
                <img src="${image}"/> 
                <h2> ${title}</h2>
                <p>${information}</p>
                <p> ${cast}</p>
                </div>
                `
                console.log(card)
                document.getElementById('container').innerHTML += `${card}`
                
            })   
            
            
        })
        .catch(err =>{
            console.error(err)
        })
        
    }  
}


// preventDefault('onclick')





