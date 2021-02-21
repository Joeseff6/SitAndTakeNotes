const fs = require(`fs`);
const path = require(`path`);

const express = require('express');

const app = express();

const PORT = process.env.PORT || 7000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'../css')));
app.use(express.static(__dirname));


require(`../../routes/apiRouting`)(app);
require(`../../routes/htmlRouting`)(app);

app.listen(PORT, () => {
    console.log(`Server is up and running, listening on: ${PORT}`);
});