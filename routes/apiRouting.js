const fs = require(`fs`);


module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        let data = fs.readFileSync(`../../db/db.json`, {encoding: `utf-8`})
        let jsonData = JSON.parse(data);
        res.json(jsonData);
    })
}