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

   
      <label for="todo-input"></label>
      <input
        id="todo-input"
        name="text"
        type="text"
        placeholder="텍스트를 입력해주세요"
      />
      <button type="submit" id="add-button">텍스트 추가</button>
  

    <button id="a-button">정렬</button>
    <button id="b-button">랜덤 고르기</button>
    <button id="c-button">랜덤 선택</button>
    <script>
      let root = document.getElementById("root");
      let addButton = document.getElementById("add-button");
      let todoInput = document.getElementById("todo-input");
      let todoItems = [];
      addButton.addEventListener("click", addItem);
      addButton.addEventListener("click", function(){
        fetch("http://localhost:8000", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: todoInput.value,
          }),
        });
      }
       )
      function addItem() {
        let newItem = getInputValue();
        let order = getOrder();
        if (newItem !== "") {
          if (order === todoItems.length - 1) {
            todoItems.push(newItem);
          } else {
            todoItems.splice(order, 0, newItem);
          }
          updateView();
          todoInput.vaule = "";
        } else {
          console.error("할 일을 입력해야 합니다.");
        }
      }
      function getInputValue() {
        return todoInput.value.trim();
      }
      function getOrder() {
        return parseInt(todoInput.value);
      }
      function updateView() {
        root.innerHTML = "";
        for (let i = 0; i < todoItems.length; i++) {
          let itemElement = document.createElement("p");
          itemElement.textContent = todoItems[i];
          root.appendChild(itemElement);
        }
      }
    </script>
  </body>
</html>



`;

module.exports = html;
