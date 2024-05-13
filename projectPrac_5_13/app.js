const http = require("http");
const server = http.createServer(function (request, response) {
  if (request.method === "GET") {
    if (request.url === "/") {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html, charset=utf-8");
      response.write("Hello World");
      console.log(request.url);
      response.end();
    }
    // console.log(request.method);
    // console.log(request.url);
  }
});
server.listen(3000);
