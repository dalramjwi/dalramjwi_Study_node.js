const http = require("http");
const fs = require("fs");
let arr = ["/index1.html", "/index2.html", "/index3.html", "/index4.html"];

const server = http.createServer((req, res) => {
  let url = req.url;
  console.log(url);
  if (url === "/") {
    FileRead("./public/index.html", (data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (url === "/index.html") {
    FileRead("./public/index.html", (data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (url === "/index1.html") {
    FileRead("./public/index1.html", (data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (url === "/index2.html") {
    FileRead("./public/index2.html", (data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (url === "/index3.html") {
    FileRead("./public/index3.html", (data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (url === "/index4.html") {
    FileRead("./public/index4.html", (data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }

  if (url === "/index.js") {
    FileRead("./public/index.js", (data) => {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  }
  if (url === "/index.css") {
    FileRead("./public/index.css", (data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  }
  if (url === "/img/backG.png") {
    FileRead("./img/backG.png", (data) => {
      res.writeHead(200, { "Content-Type": "image/png" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(8080, () => {
  console.log("Server is running on port 3000");
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
