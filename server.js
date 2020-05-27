const express = require("express");
const path = require("path")

const app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    // app.use(express.static("client/build"));
    app.use(express.static(path.join(__dirname, 'client/build')));
}

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/public/index.html'), function (err) {
        if (err) res.status(500).send(err)
    })
})

// Start the API server
app.listen(PORT, () => {
    console.log(`Hosting on http://localhost:${PORT}/`);
});