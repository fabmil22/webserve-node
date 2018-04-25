const express = require('express')
const app = express()

app.use( express.static(__dirname +'/public' ));

app.set('view engine', 'hbs');

app.listen( 3000 , () => {
    console.log('escuchando peticiones  en del puerto 3000');
})

