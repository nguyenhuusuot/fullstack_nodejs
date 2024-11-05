import express from 'express';
import path from 'path';
let configViewEngine = (app) => {
    app.use(express.static(".src/public"));
    app.set('views', path.join(process.cwd(), 'src', 'views'));
    app.set("view engine", "ejs");
}




module.exports = configViewEngine;