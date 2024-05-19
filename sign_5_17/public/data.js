const memberName = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민",
];
const password = [];
for (let i = 0; i < memberName.length; i++) {
  let number = `0000${i + 1}`.slice(-4);
  password.push(`${memberName[i]}${number}`);
}
console.log(password);
const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phone = /^\d{3}-\d{3,4}-\d{4}$/;
module.exports = { memberName, password, email, phone };
