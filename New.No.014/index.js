console.log(window.location);
// location은 현재 주소에 대한 내용을 담고있다.
// window가 뭐길래 주소 내용을 담고 있는가?
// window는 BOM(Browser Object Model)이다.
// 브라우저의 정보들을 갖고 있다.
console.log(location);
// window는 root 객체이다.
// root는 최상위 폴더/객체/클래스 등을 뜻한다.
console.log(window.navigator);
// 생각보다 자주 쓸 지도 모름
console.log(window.navigator.userAgent);
// 브라우저와 OS 관련된 정보가 정의되어있다.
// userAgent를 정규표현식을 사용해 원하는 정보만 가져올 수도 있다. (다만, 라이브러리를 사용해서 쉽게 처리 가능하다.)
// PS. 애플 계열은 IOS, iPhone, iPad, Mac 으로만 나타난다.
console.log(document.body);
// 적혀있는 그대로 body의 정보를 받아온다.
// document 는 HTML파일 구조에 대해 정의한다.
// document 는 DOM(Document Object Model)이다.
// 브라우저를 객체로 데이터화 한것
// HTML 구조의 root이다.
console.dir(document);
// console.log로 나오지 않는 것은 dir를 사용하자.
console.log(document);
// BOM / DOM feat.MVC(Model View Controller)
// Node, Tag, Element란 무엇인가 ?
// Tag 는 HTML에서 사용하는 명령어의 이름을 뜻했다. ex)html body div ...
// Tag 는 여는 Tag와 닫는 Tag로 사용한다. <div> </div>
// Element는 뭐냐? >>> 여는 Tag와 닫는 Tag를 모두 포함하는 내용이다.
// Dom(document)내에서 정의되는 Tag의 내용이다.
// ex) document.getElementById(`name`) >> name을 id로 갖는 Tag를 찾는다.
// Tag && Element의 차이는 뭐냐? Tag는 이름 그 자체이다. Element는 객체다.
// 즉, Javascript 에서 HTML 구조를 수정하거나 내용을 추가하거나 등등에서 사용하는 Tag에 대한 객체이다.
// HTML 파일에서 Tag(여는 태그, 자식들 포함)에 사용된 내용들을 모두 포함하는 것이 Element이다.

// 객체 안에 있는 함수는 메서드(method)라고 부른다.
// 객체의 키는 프로퍼티(property)라고 부른다.

// 상속 : 상속하는 객체의 정보(프로퍼티, 메서드 모두 포함)를 갖는 다른 객체를 만드는 행위?
// A = {a, b, c} => B가 A를 상속한다. => B = {a, b, c}
class People {
  constructor(person) {
    this.name = person.name;
    this.age = person.age;
    this.gender = person.gender;
  }
  log() {
    console.log(
      `name : ${this.name}, age : ${this.age}, gender : ${this.gender}`
    );
  }
}
const kim = new People({ name: "김성진", age: 27, gender: 1 });
kim.log();
const yeom = { name: "염예나", age: 22, gender: 2 };
const jung = { name: "정재훈", age: 30, gender: 1 };

// Javascript 프로토타입 형태로 되어있다.
// Javascript 는 기본적으로 Node를 기준으로 하고있다.
// Node를 이용하여 Element, document 등을 생성한다.
