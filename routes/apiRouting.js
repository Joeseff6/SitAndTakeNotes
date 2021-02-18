const fs = require(`fs`);


module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        let data = fs.readFileSync(`../../db/db.json`, {encoding: `utf-8`})
        let jsonData = JSON.parse(data);
        res.json(jsonData);
    })

    // app.post('/api/notes', (req, res) => {
    //     // req.body hosts is equal to the JSON post sent from the user
    //     // This works because of our body parsing middleware
    //     let notes = req.body;
      
    //     // Using a RegEx Pattern to remove spaces from newCharacter
    //     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //     notes.routeName = notes.name.replace(/\s+/g, '').toLowerCase();
    //     console.log(notes);
      
    //     characters.push(notes);
    //     res.json(notes);
    //   });
}