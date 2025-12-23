const express = require('express');                 // Import Express so we can create a router
const router = express.Router();                    // Create a new router instance
const axios = require('axios');                     // Axios will be used to call the MangaDex API

// This route searches MangaDex for a manga title
router.get('/mangadex/search', async (req, res) => {  
  // ^ Creates a GET route at /api/mangadex/search

  const title = req.query.title;                    // Reads the "title" query parameter from the URL

  if (!title) {                                     // If no title was provided...
    return res.status(400).json({ error: 'Missing title parameter' });
    // ...send a 400 error telling the user they must include a title
  }

  try {
    // Call the MangaDex API search endpoint
    const response = await axios.get('https://api.mangadex.org/manga', {
      params: {                                     // Pass query parameters to the API
        title: title,                               // Search for the title the user provided
        limit: 5                                    // Limit results to 5 for now
      }
    });

    const results = response.data.data;             // Extract the "data" array from the API response

    res.json({ results });                          // Send the results back to the client as JSON

  } catch (err) {
    res.status(500).json({ error: 'MangaDex API request failed' });
    // If something goes wrong, return a 500 error
  }
});

module.exports = router;                            // Export the router so server.js can use it