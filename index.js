const express = require('express')
const path = require('path')

const app = express();

// serve CSS and other static files from this same folder
app.use(express.static(__dirname));

// For the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfoliohome.html'));
});

app.listen(3000, () => {
    console.log("Portfolio running on http://localhost:3000");
});