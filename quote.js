const loadQuote=()=>{
    fetch("https://api.kanye.rest")
    .then(res=>res.json())
    .then(data=>displayQuote(data.quote))
}
const displayQuote=(quote)=>{
    // console.log(quote)
    const quoteContainer=document.getElementById('quote-container');
    quoteContainer.innerText=`'${quote}'`
}
loadQuote()