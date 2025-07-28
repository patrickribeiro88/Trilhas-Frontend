//carregando o express
const express = require("express");

//instancio o express e carregando a biblioteca do express dentro dessa const app
const app = express();

app.listen(3000, () => {
    console.log("Servidor rodando!");
})

//Lista de games
let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 90},
    {title: "Halo", studio: "Microsoft", price: 90},
    {title: "Fortnite", studio: "Epic Games", price: 0},
    {title: "GTA V", studio: "Rockstar", price: 150},
    {title: "FIFA 25", studio: "EA Sports", price: 300},
    {title: "Assassin's Creed", studio: "Ubisoft", price: 250}
];

app.get("/", (req, res) => {
    res.json(games);
});