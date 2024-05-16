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
      const html = fs.readFileSync("./public/indexOne.html");
      res.end(html);
    }
    if (req.url.startsWith("/test")) {
      const inputData = qurl.split("?")[1];
      const data = qs.decode(inputData);
      console.log(data);
      let filenameArr = [];
      // console.log(filenameArr);
      let filetextArr = [];
      // console.log(filetextArr);
      filenameArr.push(data.name);
      filetextArr.push(data.text);
      // for (let i = 0; i < filenameArr.length; i++) {
      if (filenameArr.length > 0) {
        fs.writeFile(
          `./public/index${filenameArr[0]}.html`,
          `${filetextArr[0]}`,
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }
  // }

  if (req.method === "POST") {
  }
});
server.listen(8080);
