const fs = require(`fs`);
const path = require('path');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        let jsonData = obtainJson();
        res.json(jsonData);
    })

    app.post(`/api/notes`, (req, res) => {
        let note = req.body;
        let jsonData = obtainJson();
        note.id = jsonData.length + 1;
        jsonData.push(note)
        let stringData = JSON.stringify(jsonData)

        fs.writeFile(`../../db/db.json`, stringData, (err) => {
            if (err) {
                console.log(err);
            }
        })

        res.sendFile(path.join(__dirname, '../public/notes.html'));
    })

    app.get(`/api/notes/:id`, (req, res) => {
        let id = parseInt(req.params.id);
        let jsonData = obtainJson();
        res.json(jsonData[id])
    })

    app.delete(`/api/notes/:id`, (req, res) => {
        let id = parseInt(req.params.id);
        let jsonData = obtainJson();
        let newJson = jsonData.filter(note => note.id !== id)
        let stringData = JSON.stringify(newJson)

        fs.writeFile(`../../db/db.json`, stringData, (err) => {
            if (err) {
                console.log(err);
            }
        })
        
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    })

    const obtainJson = () => {
        let data = fs.readFileSync(`../../db/db.json`, {encoding: `utf-8`})
        let jsonData = JSON.parse(data);
        return jsonData
    }
}