// We're building some real Javascript //


import { createServer } from 'http';

var server = createServer(function(request, response){
    console.log('got a request!')
    response.write('hi');
    response.end;
});

server.listen(3000)