const express = require('express');                 // Imports Express so we can create a router
const router = express.Router();                    // Creates a new router object for handling routes

const { scrapeExample } = require('../scraper/mangaScraper');  
// Imports the scraper function we wrote so we can call it inside this route

router.get('/scrape-test', async (req, res) => {    // Defines a GET route at /api/scrape-test
  try {
    const titles = await scrapeExample();           // Calls the scraper function and waits for the result
    res.json({ titles });                           // Sends the scraped data back to the client as JSON
  } catch (err) {
    res.status(500).json({ error: 'Scraping failed' }); 
    // If something goes wrong, send a 500 error response
  }
});

module.exports = router;                            // Exports the router so server.js can use it