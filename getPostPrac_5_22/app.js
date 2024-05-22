const http = require("http");
const qs = require("node:querystring");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const todolist = [];
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const html = fs.readFileSync("./index.html");
    res.write(html);
    res.end();
  }
  if (req.method === "GET") {
    if (req.url.startsWith("/test")) {
      const geturl = qs.decode(req.url.split("?")[1]);
      // const data = qs.parse(geturl);
      console.log(geturl);
    }
  }
  // if (req.method === "POST") {
  //   let body = "";
  //   req.on("data", (data) => {
  //     body += data;
  //     console.log(data);
  //   });
  //   req.on("end", () => {
  //     let parseData = JSON.parse(body);
  //     console.log(parseData);
  //     res.end();
  //   });
  // }
  if (req.method === "POST") {
    let body = "";
    //빈 문자열을 만들어 그 안에 data를 삽입하는 형태이다.
    req.on("data", (data) => {
      body += data;
      // body에 data를 추가한다.
    });
    req.on("end", () => {
      // let parse = qs.parse(body);
      //qs는 get 방식에서 사용한다.
      let parse = JSON.stringify(body);
      let jparse = JSON.parse(parse);

      //받아온 data 값 - body를 parse 한다.
      console.log(parse);
    });
  }
});
server.listen(3000);
