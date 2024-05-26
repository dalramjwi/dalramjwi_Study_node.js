const serverSet = function serverSet(port) {
  const http = require("http");
  const fs = require("fs");
  const path = require("path");
  const qs = require("node:querystring");
  // const data = require(`./data/${jparse.title}`);
  //*문서 형식에 따른 표기
  const mimeType = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css",
    ".js": "application/javascript",
    ".json": "application/json",
    ".ico": "image/x-icon",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
  };

  //*url에 따른 파일 경로 결정 함수 객체
  const fileUtils = {
    //*매개변수 url에 따른 파일 경로 할당
    getFilePath: function (url) {
      let filePath;
      if (url === "/") {
        filePath = "./public/index.html";
      } else {
        filePath = `./public${url}`;
      }
      return filePath;
    },
    //*파일 경로에 따른 파일 확장자 가져오기
    getFileExtension: function (filePath) {
      //*파일 확장자를 가져오는 명령어
      let ext = path.extname(filePath);
      //*파일 확장자 소문자로 변환
      return ext.toLowerCase();
    },
    //*파일 확장자에 따른 표기 반환
    getContentType: function (ext) {
      //*mimeType에 ext로 가져온 확장자가 있다면 표기 반환
      if (mimeType.hasOwnProperty(ext)) {
        return mimeType[ext];
      } else {
        return "text/plain";
      }
    },
  };

  //*get 요청일때 처리 함수
  function getMethod(req, res, filePath, contentType) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log("오류 발생 : ", err);
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      }
    });
  }

  //*post 요청일때 처리 함수
  function postMethod(req, res) {
    let body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      let qparse = qs.parse(body);
      let parse = JSON.stringify(qparse);
      let jparse = JSON.parse(parse);
      const jsonFilePath = path.join(__dirname, `./data/${jparse.title}.json`);
      // console.log(data);
      //JSON 파일 제작
      fs.writeFile(jsonFilePath, `${parse}`, (err) => {
        console.log(err);
      });
      fs.readdir(jsonFilePath, (err, fileList) => {
        console.log(fileList);
      });
      //JSON 파일 위치 읽기
      // fs.readFile(jsonFilePath, (err, fileData) => {
      //   if (err) {
      //     console.log(err);
      //     return;
      //   } else {
      //     const jsonData = JSON.parse(fileData);
      //     const title = jsonData.title;
      //     const content = jsonData.content;
      //     const tag = jsonData.tag;
      //     //JSON 데이터로 HTML 생성
      //     const html = ` <!DOCTYPE html>
      //         <html lang="en">
      //         <head>
      //             <meta charset="UTF-8">
      //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
      //             <title>${title}</title>
      //         </head>
      //         <body>
      //             <h1>${title}</h1>
      //             <h2>${content}</h2>
      //             <p>${tag}</p>
      //         </body>
      //         </html>
      //     `;
      //     //응답
      //     // res.writeHead(200, { "Content-Type": "text/html" });
      //     // res.end(html);
      //   }
      // });
    });
  }

  //*서버 생성
  const server = http.createServer((req, res) => {
    let url = req.url;
    if (req.url === "/favicon.ico") return;
    //*filePath라는 변수를 getFilePath에 req.url을 매개변수로 삽입한 값으로 할당
    let filePath = fileUtils.getFilePath(url);
    //*ext 변수는 getFileExtenstion에 filePath를 삽입한 값으로 할당
    let ext = fileUtils.getFileExtension(filePath);
    //*contentType 변수는 getContentType에 ext를 삽입한 값으로 할당
    let contentType = fileUtils.getContentType(ext);

    if (req.method === "GET") {
      getMethod(req, res, filePath, contentType);
    } else if (req.method === "POST") {
      postMethod(req, res);
    }

    // fs.readFile(filePath, (err, data) => {
    //   if (err) {
    //     console.log("오류 발생", err);
    //   } else {
    //     res.writeHead(200, { "Content-Type": contentType });
    //     res.end(data);
    //   }
    // });
  });

  server.listen(port, (err) => {
    if (err) {
      console.log("오류:", err);
    } else {
      console.log(`Server is running on port ${port}`);
    }
  });
};

//*매개변수 port 작성법
//*serverSet(3000);

//? export한 데이터 받아오는 명령어
//?const serverSet = require("./serverSet");

module.exports = serverSet;