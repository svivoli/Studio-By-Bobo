const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.listen(PORT || 5000, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});