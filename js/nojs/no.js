const fs = fs
const http = require('http');
http.createServer((request, response)=> {
    response.write("<h1> Хело</h1>")
    response.end()
}).listen(3000, console.log("Server Started"))
http.createServer((request, response)=> {
switch(request.url){
    case "/":
        response.write("hello")
        response.end()
        break
        default: 
        if (fstat.existsSyns(request.url.substring(1))){
            fs.createServer(request.url.substring(1)).pipe(response);
        } else {
            response.statusCode = 404
            response.end("404")
        }
}
}).listen(3000, console.log("Server Started"))