const html = `
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    #a-button,
    #b-button,
    #c-button {
      display: block;
      margin-top: 2vw;
    }
  </style>
  <body>
    <div id="root"></div>

    <form action="/" method="post">
      <input
        id="todo-input"
        name="text"
        type="text"
        placeholder="텍스트를 입력해주세요"
      />
      <button type="submit" id="add-button">텍스트 추가</button>
    </form>

    <button id="a-button">정렬</button>
    <button id="b-button">랜덤 고르기</button>
    <button id="c-button">랜덤 선택</button>
  </body>
</html>
`;

module.exports = html;
