// 입력한 텍스트를 HTML문법으로 표현한다.

class TextProcessor {
  constructor() {
    this.data = [];
  }

  // 시작태그를 생성한다.
  start(data) {
    data.push("<ul>");
  }

  // 종료태그를 생성한다.
  end(data) {
    data.push("</ul>");
  }

  // 리스트 아이템을 생성한다.
  addListItem(data, item) {
    data.push(`<li>${item}</li>`);
  }

  // 입력한 값을 데이터에 저장한다.
  appendList(items) {
    this.start(this.data);

    for (let item of items) {
      this.addListItem(this.data, item);
    }

    this.end(this.data);
  }

  // 데이터 초기화
  clear() {
    this.data = [];
  }

  // 저장된 데이터를 콘솔로 출력한다.
  showData() {
    console.log(this.data.join("\n"));
  }
}

const myTp = new TextProcessor();

myTp.appendList(["hello", "JS", "World"]);
myTp.showData();

myTp.clear();
myTp.appendList(["hello", "HTML", "World"]);
myTp.showData();
