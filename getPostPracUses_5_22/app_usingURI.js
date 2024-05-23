const http = require("http");
const fs = require("fs");
const qs = require("node:querystring");
const index = require("./public/index.js");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });
      res.write(index);
    }
  }
  if (req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    let body = "";
    req.on("data", (data) => {
      body += data;
      console.log(body);
    });
    req.on("end", () => {
      let pdata = decodeURI(req.url);
      console.log(pdata);
    });
  }
});
server.listen(3000);
