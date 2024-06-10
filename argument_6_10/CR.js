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
