Hello this is my personal project
it is a manga/manhwa/manhua scrapper which grabs all avilable manga and saves it to a database and gives you daily slop based on your preferences

## 🔗 Workflow Diagram

**Frontend (React/Next.js)**  
⬇️ User searches for "Solo Leveling"  

**Backend (Express API routes)**  
➡️ `/search?title=Solo Leveling`  

**Scraper (Cheerio/Puppeteer)**  
➡️ Fetch external sites → Extract metadata (title, cover, links)  

**Database (MongoDB)**  
➡️ Store results (so you don’t scrape every time)  

**Backend returns JSON**  
⬇️ `{ title: "Solo Leveling", links: ["siteA", "siteB"] }`  

**Frontend displays results**  
➡️ Cover image + title + clickable links styled like MangaDex  

---

## 📅 Daily Goals / Mini Projects

### Day 1: Setup & Basics
- Install Node.js and initialize project (`npm init`)
- Install Express
- Create a simple server that responds with “Hello World” at `/hello`
- Push this to GitHub

### Day 2: Learn JavaScript Essentials
- Practice variables, arrays, objects, and functions
- Learn `async/await`
- Write a small script that fetches a webpage with `fetch` or `axios`

### Day 3: First Scraper
- Install Cheerio
- Pick one test site
- Extract title + link from a page
- Log results to console

### Day 4: Database Setup
- Install MongoDB locally or use MongoDB Atlas
- Learn how to insert and query documents
- Save scraped results into MongoDB
- Create a schema: `{ title, author, links }`

### Day 5: API Routes
- Add `/search` route in Express
- Query MongoDB for a title
- Return JSON results
- Test with Postman or curl

### Day 6: Frontend Basics
- Initialize Next.js app in `frontend/`
- Create a search bar component
- Call backend API and display JSON results

### Day 7: Styling & Polish
- Add TailwindCSS for styling
- Make results look like a manga directory (cover, title, links)
- Push everything to GitHub with a clear README

---

## 🎯 Weekly Milestone
By the end of the week, the project will have:
- A working backend with scraping + database
- A frontend that queries the backend and shows results
- A GitHub repo with commits showing progress
