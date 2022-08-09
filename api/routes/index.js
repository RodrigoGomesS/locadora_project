const express = require('express');
const filmes = require('./filmesRoutes');
// const generos = require('./generosRoutes');

module.exports = app => {
    app.use(express.json());

    app.use(
        filmes,
        // generos
    )

}