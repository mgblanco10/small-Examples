// Almacene citas en un arreglo
const quotes = [
    {
      quote: "La vida es lo que sucede mientras estás ocupado haciendo otros planes.",
      author: "John Lennon"
    },
    {
      quote: "No hay nada como un sueño para crear el futuro.",
      author: "Víctor Hugo"
    },
    {
      quote: "La libertad no es nada más que una oportunidad para ser mejor.",
      author: "Albert Camus"
    },
    {
        quote: "La única forma de hacer un gran trabajo es amar lo que haces",
        author: "Steve Jobs"
      },
      {
        quote: "La creatividad es la inteligencia divirtiéndose",
        author: "Albert Einstein"
      },
      {
        quote: "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello",
        author: "Charles R. Swindoll"
      },
      {
        quote: "La felicidad no es algo hecho. Viene de tus propias acciones",
        author: "Dalai Lama"
      }
  ];
  
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  function displayQuote() {
    const { quote, author } = getRandomQuote();
    document.getElementById("text").textContent = quote;
    document.getElementById("author").textContent = `- ${author}`;
  }
  
  function tweetQuote() {
    const { quote, author } = getRandomQuote();
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)} - ${encodeURIComponent(author)}`;
    window.open(twitterUrl, "_blank");
  }
  
  displayQuote();
  document.getElementById("new-quote").addEventListener("click", displayQuote);
  document.getElementById("tweet-quote").addEventListener("click", tweetQuote);
  