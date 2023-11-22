const express = require('express')
const app = express()
const port = 8080;

//Servir contenido estativos

app.use(express.static('public'))


app.get('/generic', (req, res) => {

    res.sendFile( __dirname + '/public/generic',);
    
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