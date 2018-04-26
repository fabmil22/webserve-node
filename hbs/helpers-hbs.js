var hbs = require('hbs');
hbs.registerHelper('getYear', ()=>{

     return new Date().getFullYear();
});

hbs.registerHelper('Mayu', (va)=>{
    
         return   String(va).toUpperCase();
    });


    
