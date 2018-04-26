const express = require('express')
const app = express()

app.use( express.static(__dirname +'/public' ));

app.set('view engine', 'hbs');





var hbs = require('hbs');
//helpers
require('./hbs/helpers-hbs');

hbs.registerPartials(__dirname + '/views/partials');



app.get( '/' ,(req , res) => {

 res.render('home',{
        nombre: "Fabian",
        cargo: "Analista Programador"

 });


});

app.get( '/about' ,(req , res) => {
    
     res.render('about',{
            texto: `This value is received by the expand operator and is emitted — mirroring 
            the source observable. It’s also passed to the project function, which checks to see if there 
            is a next page. If there is, a call to get for the next page feeds back into the observable stream,
             as if its notifications were from the source — just like an echo feeds back with a delay pedal.`,
            cargo: "Analista Programador",
            story: {
                intro: "Before the jump",
                body: "After the jump"
              }
    
     });
    
    
    });

    app.get( '/servicios' ,(req , res) => {
        
         res.render('servicios',{
                texto: `Un web service es una vía de intercomunicación e interoperabilidad entre máquinas conectadas en Red.
                 En el mundo de Internet se han popularizado enormemente, ya se trate de web services públicos o privados.
                  Generalmente, la interacción se basa en el envío de solicitudes y respuestas entre un cliente y un
                   servidor, que incluyen datos. El cliente solicita información, enviando a veces datos al servidor
                    para que pueda procesar su solicitud. El servidor genera una respuesta que envía de vuelta al cliente,
                     adjuntando otra serie de datos que forman parte de esa respuesta. Por tanto, podemos entender un servicio web como un tráfico de mensajes entre dos máquinas..`,
                cargo: "Analista Programador"
        
         });
        
        
        });
app.listen( 3000 , () => {
    console.log('escuchando peticiones  en del puerto 3000');
})

