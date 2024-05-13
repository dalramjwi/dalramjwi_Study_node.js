const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
  if (request.method === "GET") {
    if (request.url === "/") {
      const first = fs.readFileSync("./public/index.html", "utf8");

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      response.write(first);
      response.end();
    }
    if (request.url === "/style.css") {
      const second = fs.readFileSync("./public/style.css");

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/css; charset=utf-8");
      response.write(second);
      response.end();
    }
    if (request.url === "/index.js") {
      const third = fs.readFileSync("./public/index.js");

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/javascript; charset=utf-8");
      response.write(third);
      response.end();
    }
    if (request.url === "/a.html") {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      response.write("first");
      response.end();
    }
    console.log(request.url);
  }
});

server.listen(3000);
