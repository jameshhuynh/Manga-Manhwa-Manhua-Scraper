const express = require('express');                 // Imports Express so we can create a router
const router = express.Router();                    // Creates a new router object for handling routes
const axios = require('axios');                     // Axios will be used to call the MangaDex API

router.get('/mangadex/manga/:id', async (req, res) => { // Defines a GET route at /api/mangadex/manga/:id
  const mangaId = req.params.id;                     // Extracts the manga ID from the URL parameters
    try {
    const response = await axios.get(
  `https://api.mangadex.org/manga/${mangaId}?includes[]=cover_art&includes[]=author&includes[]=artist`,
  {
    headers: {
      'User-Agent': 'MangaProject/1.0'
    }
  }
);
    
    const mangaDetails = response.data;
    const Englishtitle = mangaDetails.data.attributes.title['en'] || 'Title not available';
    const EnglishDescription = mangaDetails.data.attributes.description['en'] || 'Description not available';
    const Tags = mangaDetails.data.attributes.tags.map(tag => tag.attributes.name['en'] || 'Tag name not available');
    const Status = mangaDetails.data.attributes.status || 'Status not available';
    const Year = mangaDetails.data.attributes.year || 'Year not available';
    const Relationships = mangaDetails.data.relationships || [];

    const coverRelationship = Relationships.find(rel => rel.type === 'cover_art');
    const authorrelationship = Relationships.find(rel => rel.type === 'author');
    const artistrelationship = Relationships.find(rel => rel.type === 'artist');
    let coverUrl = 'Cover URL not available';
    if (coverRelationship) {
      const fileName = coverRelationship.attributes.fileName;
      coverUrl = `https://uploads.mangadex.org/covers/${mangaId}/${fileName}`;
    }

    const cleanMangaData = {
        title: Englishtitle,
        description: EnglishDescription,
        tags: Tags,
        status: Status,
        year: Year,
        coverUrl: coverUrl,
        author: authorrelationship ? authorrelationship.attributes.name : 'Author not available',
        artist: artistrelationship ? artistrelationship.attributes.name : 'Artist not available'
    };

    return res.json(cleanMangaData);

    } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch manga details' });
  }
});

module.exports = router;                            // Export the router so server.js can use it