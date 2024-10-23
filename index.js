const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

var mutableArray = [];
app.use(express.json());

/// APIS
app.get("/api", (req, res) => {
    res.json({array: mutableArray, message: "Hello from server!"});
});

app.post("/api/submit", (req, res) => {

    const country =  req.body.country;
    console.log(req.body);
    mutableArray.push(country);
    res.json({ message: "Form submitted successfully!" });
});

app.get("/api/selectedCountries", (req, res) => {
    res.json(mutableArray);
});

app.get("/api/redirect", (req, res) => {
    const tls = req.query.tls === 'true';
    const redirectUrl = tls ? "https://www.stackoverflow.com" : "http://www.neverssl.com";
    res.redirect(302, redirectUrl);
});

app.listen(PORT, () => {
    console.log(`Express Server listening on ${PORT}`);
});