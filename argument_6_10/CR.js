//생성자 함수 만들기 위한 틀, class 사용
class Person {
  //객체의 기본 상태를 설정하는 생성자 메서드
  constructor() {
    //name, age, job을 기본 상태로 설정해두고 있다.
    this._name = "";
    this._age = "0";
    this._job = "";
  }
  //setter, 값을 저장할 때 실행.
  //name에 저장되는 값인 value를 그대로 출력한다.
  set name(value) {
    this._name = value;
  }
  //getter, 값을 사용할 때 실행.
  //저장된 값을 그대로 꺼내간다.
  get name() {
    return this._name;
  }
  //마찬가지로 실행한다.
  set age(value) {
    this._age = value;
  }
  get age() {
    return this._age;
  }
  //마찬가지로 실행한다.
  set job(value) {
    this._job = value;
  }
  get job() {
    return this._job;
  }
}
//생성된 person 생성자 함수를 사용하고, 후에 값을 할당하고 있다.
const person = new Person();
person.name = "김달";
person.age = "11";
person.job = "자택경비";
//console.log로 작성된 값 확인
console.log("Name : ", person.name);
console.log("Age : ", person.age);
console.log("Job : ", person.job);

/**
 * 화살표 함수로 콜백 함수이다.
 * @param {function} callback person이라는 빈 객체를 만들고, callback 함수를 실행한다.
 */
const createPerson = (callback) => {
  let person = {};
  callback(person, setName);
};
/**
 * 콜백 함수이다.
 * @param {object} person createPerson에서 정의한 빈 객체이다
 * @param {function} callback callback 함수이다.
 */
const setName = (person, callback) => {
  //빈 객체에 key 값과 value 값을 후에 할당하고 있다.
  person.name = "배고파";
  callback(person, setAge);
};
/**
 * 콜백 함수이다.
 * @param {object} person person이라는 객체 안에 name 값이 추가된 객체이다.
 * @param {function} callback  callback 함수.
 */
const setAge = (person, callback) => {
  person.age = "11";
  callback(person, setJob);
};
/**
 * person 객체에 값을 할당하고 console로 확인하는 콜백 함수이다.
 * @param {object} person name과 age 값이 추가되어 있는 person 객체
 */
const setJob = (person) => {
  person.job = "밥";
  console.log(person);
};
//createPerson 함수를 부르고, 매개변수로 콜백함수를 넣었다.
//매개변수에 넣은 콜백함수는 setName 콜백함수이다.
//인자를 전달하기 위해 다음과 같은 형태로 작성했다.
createPerson((person, callback) => callback(person, setName));
