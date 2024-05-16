const http = require("http");
const fs = require("fs");
const qs = require("node:querystring");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const qurl = req.url;
    console.log("요청 url 검사 : " + qurl);
    const qstring = qurl.split("?");
    console.log(qstring);
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      const html = fs.readFileSync("./public/index.html");
      res.end(html);
    }
    if (req.url.startsWith("/test")) {
      const inputData = qurl.split("?")[1];
      const data = qs.decode(inputData);
      console.log(data);
    }
  }

  if (req.method === "POST") {
  }
});
server.listen(8080);
