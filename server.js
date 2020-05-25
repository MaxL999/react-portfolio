const express = require("express");
const path = require("path")

const app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, 'client/public/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

// Start the API server
app.listen(PORT, function () {
    console.log(`Hosting on http://localhost:${PORT}/`);
});