//CS55.13 FALL 2025 WEEK 02
//JORGE SANTIAGO (=ФェФ=)
const myhttp = require("http");

//This loads the core node filesystem (fs) module, using js promises instead of callbacks
const filesys = require("fs").promises;



const listens = function( Requests, Responses) {
    console.log( Requests.url );

    let returns = function(data, type = "text/plain"){
        Responses.writeHead(200, {"Content-Type": type + "; charset=UTF-8" });
        Responses.end(data);
    };

    switch (true){
        case Requests.url === "/":  
      //return html file
        filesys.readFile(__dirname + "/home.html")
            .then(data => {  // same as function(data) {...} V
                returns(data, "text/html");
            })
                    break;

        case Requests.url.startsWith("/") && Requests.url !== "/": 
                    filesys.readFile(__dirname + "/info.json")
                    .then(data => returns(data, "application/json"))
                    break;
                }
            };
    

let myserver = myhttp.createServer(listens);

myserver.listen(8080, "127.0.0.1" );