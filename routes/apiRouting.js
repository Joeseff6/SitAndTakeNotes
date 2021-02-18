const fs = require(`fs`);


module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        let data = fs.readFileSync(`../../db/db.json`, {encoding: `utf-8`})
        console.log(data)
        let jsonData = JSON.parse(data);
        console.log(jsonData)
        res.json(jsonData);
    })

    app.post(`/api/notes`, (req, res) => {
        // let newNote = req.body;
        // let stringNote = JSON.stringify(newNote);

        // let newNote = req.body;
        // console.log(newNote)
        // let sendNote = `
        // [ 
        //     {
        //         "title":"${req.body.title}",
        //         "text":"${req.body.text}
        //     }
        // ]`;

        let data = fs.readFileSync(`../../db/db.json`, {encoding: `utf-8`})
        let jsonData = JSON.parse(data);
        let newNote = req.body
        jsonData.push(newNote)
        console.log(jsonData)
        let stringData = JSON.stringify(jsonData)
        console.log(stringData)

        fs.writeFile(`../../db/db.json`, stringData, (err) => {
            if (err) {
                console.log(err);
            }
        })
    })
}