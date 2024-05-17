const http = require("http");
const fs = require("fs");
const qs = require("node:querystring");

const server = http.createServer((req, res) => {
  let url = req.url;
  console.log(url);
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      const html = fs.readFileSync("./public/index.html");
      res.end(html);
    }
  }

  if (req.method === "POST") {
    let body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      let parse = qs.parse(body);
      console.log(parse);
    });
  }

  if (url === "/index.js") {
    FileRead("./public/index.js", (data) => {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});

function FileRead(path, callback) {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  });
}
