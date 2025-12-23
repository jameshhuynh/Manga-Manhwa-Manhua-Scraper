const express = require('express');                 // Imports Express framework
const app = express();                              // Creates an Express application instance
const port = 3000;                                  // Sets the port number the server will listen on

const scrapeRoutes = require('./routes/scrape');    // Imports the scraper routes we created
app.use('/api', scrapeRoutes);                      // Mounts those routes under /api (e.g., /api/scrape-test)

app.get('/', (req, res) => {                        // Defines the root route so / doesn't show "Cannot GET /"
  res.send('Server is running. Try /api/scrape-test');
});

app.listen(port, () => {                            // Starts the server and listens on the chosen port
  console.log(`Server running at http://localhost:${port}`);
});

const mangadexRoutes = require('./routes/mangadex');  // Import the MangaDex routes
app.use('/api', mangadexRoutes);                      // Mount them under /api