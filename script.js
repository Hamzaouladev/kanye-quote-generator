let btn = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let eventTriggers = ["click", "DOMContentLoaded"];


eventTriggers.forEach(event => {
  document.addEventListener(event, (e) => {
    if((event === "click" && e.target === btn) || event === "DOMContentLoaded") {
      const getQuote = async () => {
        const res = await fetch('https://api.kanye.rest');
        if(res.status !== 200) {
          throw new Error('cannot fetch data');
        }
        const data = await res.json();
        return data;
      }
      
      getQuote()
      .then(data => {
        quote.textContent = '"' + data.quote + '"';
      })
      .catch(err => {
        console.log(err.message);
        quote.textContent = "Every stage show I’ve ever worked on, Every video, not just Stronger, every product, even when I was in the hospital, I would think… oh shit this is like Akira"
      })
    }
  })
})
