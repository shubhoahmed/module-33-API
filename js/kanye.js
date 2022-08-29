// const loadKanyeQuotes = () => {
//     const url = `https://api.kanye.rest/`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayQuote(data.quote));
// }

// const displayQuote = quotes => {
//     const blockQutes = document.getElementById('quote')
//     blockQutes.innerText = quotes;
// }

// // loadKanyeQuotes();

const loadQuotes = () => {
    const url = `https://api.kanye.rest/`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayQuotes(data))
}

const displayQuotes = quoteData => {
    const blockQutes = document.getElementById('quote');
    blockQutes.innerText = quoteData.quote;
}

// loadQuotes();