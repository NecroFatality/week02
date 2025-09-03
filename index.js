//CS55.13 FALL 2025 WEEK 02
//JORGE SANTIAGO (=ФェФ=)
const myhttp = require("http");

//This loads the core node filesystem (fs) module, using js promises instead of callbacks
const filesys = require("fs").promises;

const listens = function( Requests, Responses) {
    console.log( Requests.url );
   
    let returns = function(data){
        Responses.writeHead(200);
        Responses.end(data);
    };


    switch (Requests.url){
        case "/":  
        //check request url, if root, return html file
        filesys.readFile(__dirname + "/home.html").then(
            data => {  // same as function(data) {...} V
    
                    Responses.setHeader("Content-Type", "text/html; charset=UTF-8");
                    returns(data);
            })
                    break;

        case "/json": 
                    Responses.setHeader("Content-Type", "application/json; charset=UTF-8");
                    returns(data);
                    break;

                    default:
                        Responses.writeHead(404, { "Content-Type": "text/plain; charset=UTF-8" });
                        Responses.end("404 Not Found");
                }
            };
    

let myserver = myhttp.createServer(listens);

myserver.listen( 8080, "127.0.0.1" );