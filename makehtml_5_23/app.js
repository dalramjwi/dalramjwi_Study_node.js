let http = require("http"); // http 모듈
let fs = require("fs"); // filesystem 모듈
let url = require("url"); // URL 모듈
let qs = require("querystring"); //querystring 모듈
const path = require("path");
//template 내용 HTML 뼈대를 함수로 만들기.
function templateHTML(title, list, control, body) {
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <link rel="stylesheet" href="style.css">
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">Test</a></h1>
    ${list}
    ${control}
    ${body}
  </body>
  </html>
  `;
}
//리스트를 자동으로 만들어주는 코드를 함수로 만들기.
function templateList(filelist) {
  let list = "<ul>";
  for (let i = 0; i < filelist.length; i += 1) {
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
  }
  list = list + "</ul>";
  return list;
}
let app = http
  .createServer(function (request, response) {
    let _url = request.url; //URL 요청
    let queryData = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;
    if (pathname === "/") {
      if (queryData.id === undefined) {
        fs.readdir("./data", function (err, filelist) {
          let title = "";
          let description = "";
          let control = "";
          let list = templateList(filelist);
          let template = templateHTML(
            title,
            list,
            control,
            `<a href="/create">Create</a>`
          );
          response.writeHead(200); // 페이지가 정상적으로 출력되면 200, 오류페이지면 404.
          response.end(template); //화면출력하는부분
        });
        //요청한 pathname이 루트값이 아니라면,대신 queryData.id가 있다면, else문 실행.
      } else {
        fs.readdir("./data", function (err, filelist) {
          fs.readFile(
            `data/${queryData.id}`,
            "utf-8",
            function (err, description) {
              let title = queryData.id;
              let list = templateList(filelist);
              let template = templateHTML(
                title,
                list,
                `<h2>${title}</h2>${description}`,
                `<a href="/create">Create</a> 
            <a href="/update?id=${title}">Update</a> 
            <form action="delete_process" method="POST" onsubmit="정말 삭제하시 겠습니까?">
              <input type="hidden" name="id" value="${title}">
              <input type="submit" value="Delete">
            </form>
            `
              );
              response.writeHead(200);
              response.end(template);
            }
          );
        });
      }
      //pathName이 Create라면 실행할 조건문. 생성기능을 할 때 실행될 조건문. 데이터를 보내자!
    } else if (pathname === "/style.css") {
      const css = fs.readFileSync("./src/css/style.css");
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/css; charset=utf-8");
      response.write(css);
      response.end();
    } else if (pathname === "/create") {
      //디렉토리를 읽는 함수 filelist변수가 파일목록. 배열로 반환.
      fs.readdir("./data", function (err, filelist) {
        let title = "WEB - Create";
        let list = templateList(filelist); //파일목록배열을 list변수에 할당.
        //HTML 뼈대 함수를 호출해 template 변수에 할당.
        let template = templateHTML(
          title,
          list,
          `
          <!--form 태그-->  
          <form action="http://localhost:3000/create_process" method="POST">
            <p><input type="text" name="title" placeholder="제목입력"></p>
            <p><textarea name="description" cols ="23" row="5" placeholder="본문입력"></textarea></p>
            <p><input type="submit"></p>
          </form> 
          `,
          ""
        );
        response.writeHead(200); // 페이지가 정상적으로 출력되면 200, 오류페이지면 404.
        response.end(template); //화면출력하는부분에 template변수를 넣어줘서 출력.
      });
      console.log(queryData.id);

      //글쓰기를 실행했을 때 데이터를 받아온 데이터를 처리하는 조건문.
    } else if (pathname === "/create_process") {
      let body = ""; // body에 빈 변수 선언.
      request.on("data", function (data) {
        //콜백함수. 서버에서 수신한 정보를 data 매개변수에 담음.
        body = body + data; //데이터가 전송될 때마다, 빈 변수 body에다가 전송된 데이터를 추가해줌.
      });
      request.on("end", function () {
        // 데이터를 호출하다가, 데이터를 다 받은 뒤 할 실행될 함수.
        let post = qs.parse(body);
        let title = post.title;
        let description = post.description;
        fs.writeFile(`data/${title}`, description, "utf8", function (error) {
          //200 성공,  404 실패, 302 리다이렉션
          response.writeHead(302, { Location: encodeURI(`/?id=${title}`) });
          response.end(); //화면출력하는부분
        });
      });

      //pathname이 update일 때, 즉 '수정'기능을 수행하는 조건문을 추가.
    } else if (pathname === "/update") {
      // 디렉토리를 읽는 함수 filelist변수가 파일목록. 배열로 반환.
      fs.readdir("./data", function (err, filelist) {
        // 파일을 읽는 함수. description변수가 파일.
        fs.readFile(
          `data/${queryData.id}`,
          "utf-8",
          function (err, description) {
            let title = queryData.id;
            let list = templateList(filelist);
            let template = templateHTML(
              title,
              list,
              `
      <!--form 태그-->
      <form action="http://localhost:3000/update_process" method="POST">
        <input type="hidden" name="id" value="${title}">
        <p><input type="text" name="title" placeholder="수정할 제목" value=${title}></p>
        <p><textarea name="description" placeholder="수정할 본문입력">${description}</textarea></p>
        <p><input type="submit"></p>
      </form> 
      `,
              `<a href="/create">Create</a> 
      <a href="/update?id=${title}">Update</a>`
            );
            response.writeHead(200); // 페이지가 정상적으로 출력되면 200, 오류페이지면 404.
            response.end(template); //화면출력하는부분
          }
        );
      });
    } else if (pathname == "/update_process") {
      var body = ""; // body에 빈 변수 선언.
      request.on("data", function (data) {
        //콜백함수. 서버에서 수신한 정보를 data 매개변수에 담음.
        body = body + data; //데이터가 전송될 때마다, 빈 변수 body에다가 전송된 데이터를 추가해줌.
      });
      request.on("end", function () {
        // 데이터를 호출하다가, 데이터를 다 받은 뒤 할 실행될 함수.
        var post = qs.parse(body); //포스트에 바디에 저장된, 데이터를 querystring body부분을 통해 전달받음.
        var id = post.id; // 우린 id값도 받았으니, id값도 처리해주어야하므로 id 변수생성.
        var title = post.title;
        var description = post.description;
        fs.rename(`data/${id}`, `data/${title}`, function (error) {
          //제목을 바꾸는..
          fs.writeFile(`data/${title}`, description, "utf8", function (error) {
            //본문을 바꾸는..
            //200 성공,  404 실패, 302 리다이렉션
            response.writeHead(302, { Location: encodeURI(`/?id=${title}`) }); //수정한 페이지로 이동..
            response.end(); //화면출력하는부분
          });
        });
      });
    } else if (pathname === "/delete_process") {
      let body = "";
      request.on("data", function (data) {
        body = body + data;
      });
      request.on("end", function () {
        let post = qs.parse(body);
        let id = post.id;
        fs.unlink(`data/${id}`, function (error) {
          response.writeHead(302, { Location: encodeURI(`/`) });
          response.end();
        });
      });
    } else {
      response.writeHead(404); // 페이지가 정상적으로 출력되면 200, 오류페이지면 404.
      response.end("NOT FOUND"); //화면출력하는부분
    }
  })
  .listen(3000); // 3000번 포트를 서버로 사용하겠다. 선언.
console.log("http://localhost:3000/");
