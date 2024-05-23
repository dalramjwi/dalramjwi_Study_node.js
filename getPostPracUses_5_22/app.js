const http = require("http");
const fs = require("fs");
const qs = require("node:querystring");
const index = require("./public/index.js");
let textData = [];
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write(index);
    }
  }
  if (req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    let body = "";
    req.on("data", (data) => {
      body += data;
      // console.log(body);
    });
    req.on("end", () => {
      let qsdata = qs.parse(body);
      let parse = JSON.stringify(qsdata);
      let jparse = JSON.parse(parse);
      textData.push(jparse.text);
      console.log(textData);
      // console.log(qsdata);
      res.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="/test" method="post">
      <input type="text" name="text" id="text" placeholder="입력" />
      <button type="submit">입력</button>
    </form>
    <div>${textData}</div>
  </body>
</html>
    `);
    });
  }
});
server.listen(3000);
