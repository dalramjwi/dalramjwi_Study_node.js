const http = require("http");
const fs = require("fs");
const qs = require("node:querystring");
const memberName = require("./public/data.js");
// const namearr = [];
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

      for (let i = 0; i < memberName.length; i++) {
        if (parse.name === memberName[i]) {
          res.statusCode = 201;
          return (res.statusCode = 201);
        } else if (parse.name !== memberName[i]) {
          res.statusCode = 404;
        }
        console.log(res.statusCode);
      }
    });
  }

  if (url === "/index.js") {
    FileRead("./public/index.js", (data) => {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.write(data);
      res.end();
    });
  }
  if (url === "/formSet.js") {
    FileRead("./public/formSet.js", (data) => {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.write(data);
      res.end();
    });
  }
  if (url === "/data.js") {
    FileRead("./public/data.js", (data) => {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.write(data);
      res.end();
    });
  }
  if (url === "/inputSet.js") {
    FileRead("./public/inputSet.js", (data) => {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.write(data);
      res.end();
    });
  }
  if (url === "/buttonSet.js") {
    FileRead("./public/buttonSet.js", (data) => {
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
