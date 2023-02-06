class ParentTestClass {
  #privateValue;
  constructor(value) {
    this.#privateValue = value;
  }

  get privateValue() {
    // 보통은 private 키를 가져올 때 사용한다.
    return this.#privateValue;
  }

  set privateValue(value) {
    this.#privateValue = value;
  }
}

class TestClass extends ParentTestClass {
  constructor(value) {
    super(value);
    console.log(this.privateValue);
  }
}

module.exports = TestClass;
