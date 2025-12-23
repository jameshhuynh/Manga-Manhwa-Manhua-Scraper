const axios = require('axios');          // Imports Axios, used to download HTML from websites
const cheerio = require('cheerio');      // Imports Cheerio, used to parse and extract data from HTML

// This function will scrape a test website to prove everything works
async function scrapeExample() {
  const url = 'https://example.com';     // The website we want to scrape (placeholder for now)

  const { data } = await axios.get(url); // Sends a GET request to the URL and stores the HTML response in "data"
  const $ = cheerio.load(data);          // Loads the HTML into Cheerio so we can query it like jQuery

  const titles = [];                     // Creates an empty array to store extracted text

  $('h1').each((i, el) => {              // Selects all <h1> elements on the page and loops through them
    titles.push($(el).text());           // Extracts the text inside each <h1> and adds it to the array
  });

  return titles;                         // Returns the array of extracted titles
}

module.exports = { scrapeExample };       // Exports the function so routes can use it