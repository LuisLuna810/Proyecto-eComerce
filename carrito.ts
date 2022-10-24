const fs = require("./entrada.json");

console.log(fs);

var articulo1 = JSON.parse(fs);
var enviado = JSON.stringify(articulo1);