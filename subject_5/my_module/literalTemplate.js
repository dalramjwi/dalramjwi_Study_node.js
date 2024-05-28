function htmlTempalte(title, content, tag) {
  return `<!DOCTYPE html>
  <html>
  <head>
    <title>${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
  <h1>${title}</h1>
  <h2>${content}</h2>
  <p>${tag}</p>
  </body>
  </html>`;
}
// function listTemplate() {}

// export한 데이터 받아오는 명령어
//? const template = require("./literalTemplate");

module.exports = htmlTempalte;
