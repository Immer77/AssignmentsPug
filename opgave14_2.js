const express = require('express');
const fetch = require('node-fetch');
const app = express();
const url = "https://randomuser.me/api/?nat=dk&results=100"
const urlWithAmount = "https://randomuser.me/api/?nat=dk&results="
const PORT = 1231;

app.set("view engine", "pug")


async function get(url){
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

app.get('/', async (req,res) => {
    let data = await get(url);
    res.render('opgave14_2', {data: data.results});
})

async function getUsers(url, amount, nationality){
    const respons = await fetch(url + amount);
    if (respons.status !== 200){
        throw new Error(respons.status);
    } // OK
    return await respons.json();
}



app.listen(PORT, () =>{
    console.log(`Listening on port http://localhost:${PORT}`);
})