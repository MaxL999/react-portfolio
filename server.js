const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Start the API server
app.listen(PORT, function () {
    console.log(`Hosting on http://localhost:${PORT}/`);
});