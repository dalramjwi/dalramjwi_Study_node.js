const http = require("http");
const fs = require("fs");
const qs = require("querystring");
const todolist = [];
const server = http.createServer(function (request, response) {
  if (request.method === "GET") {
    if (request.url === "/") {
      const first = fs.readFileSync("./data.html", "utf8");

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      response.write(first);
      response.end();
    }
    if (request.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      console.log(body);
      req.on("end", () => {
        const postData = qs.parse(body);
        console.log("Received text from client:", postData.title);
        todolist.push(postData.title);
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(data);
      });
    }
  }
});

server.listen(3000);
