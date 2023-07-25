// Get Quotes from API

let apiQuotes = [];

async function getQuotes() {
    const apiURL =
        "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        console.log(apiQuotes[12]);
    } catch (err) {
        // catch error here
    }
}

// On Load
getQuotes();
