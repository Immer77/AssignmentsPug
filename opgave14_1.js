const express = require('express');
const app = express();
const fs = require('fs').promises;
const PORT = 3000;

// 1 Template
app.set('view engine', 'pug');


// 2 Middleware

app.get('/', async (request,response) =>{
    let files = await fs.readdir(__dirname + '/filer');
    response.render('opgave14-1', {files : files})
})

app.get('/:filnavn', async (request, response) => {
    try {
        let sti = __dirname + '/filer' + request.url;
        let fildata = await fs.readFile(sti);
        response.writeHead(200); // OK
        response.write(fildata);
    } catch (error) {
        response.writeHead(404); // Not Found
        response.write(e.name + ": " + e.message);
    }
})

app.listen(PORT, () =>{
    console.log(`Listening on: http://localhost:${PORT}`);
})