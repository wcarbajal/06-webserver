const http = require('http');

http.createServer( (req, res) => {console.log(req);

    res.setHeader('Content-Disposition', 'attachment ; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('id, nombre\n');
    res.write('1, Wuilmer\n');
    res.write('2, Carbajal\n');
    res.write('3, Barrenechea\n');
    res.end();
})
.listen(8080);
console.log("Escuchando en el puerto 8080");
