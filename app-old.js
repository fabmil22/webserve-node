const Http =  require('http');

Http.createServer( (req , res) =>{


    res.writeHead( 200, {'Content-type' :'application/json'});
  

     let data = {
         name: 'fabian',
         subname: 'Miliani',
         url: req.url
     }
     res.write(JSON.stringify(data));
    res.end()


}).listen(3000);

console.log('servicio prendido');