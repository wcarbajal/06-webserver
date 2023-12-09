const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

//Handlebars configuration
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');




//Servir contenido estativos

app.use(express.static('public'));

app.get('/', (req, res) => {

  res.render('home', {
    nombre: 'Wuilmer carbajal',
    titulo: 'Curso de Node'

  });
   
})


app.get('/generic', (req, res) => {

    res.render( 'generic', {
      nombre: 'Wuilmer carbajal',
      titulo: 'Curso de Node'
  
    });
     
  })
  
  app.get('/elements', (req, res) => {

    res.render( 'elements', {
      nombre: 'Wuilmer carbajal',
      titulo: 'Curso de Node'
  
    });
     
  })

  

  
app.get('/hola-mundo', (req, res) => {

    res.send('Hello World en home');
    
  })
  

  app.get('*', (req, res) => {

    res.sendFile( __dirname + '/public/404.html');
    
  })
  
app.listen(port, () => {
    console.log('Ejemplo de app listening at http://localhost:' + port);
})