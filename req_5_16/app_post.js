const http = require("http");
const fs = require("fs");
const qs = require("node:querystring");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      const html = fs.readFileSync("./public/indexTwo.html");
      res.end(html);
    }
  }

  if (req.method === "POST") {
    let body = "";
    req.on("data", (data) => {
      body += data;
      // console.log(body);
    });
    req.on("end", () => {
      let parse = qs.parse(body);
      console.log(parse);
      fs.writeFile(
        `./public/index${parse.name}.html`,
        `${parse.text}`,
        (err) => {
          console.log(err);
        }
      );
    });
  }
});
server.listen(8080);
