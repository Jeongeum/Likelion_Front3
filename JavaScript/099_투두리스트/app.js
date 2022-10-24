const main = document.querySelector(".artcl_main");
const userTask = main.querySelector("header input");
const addBtn = main.querySelector("header button");
const listTodo = main.querySelector(".list_todo");

// 할일 추가 이벤트
addBtn.addEventListener("click", createListItem);

// 경고 메시지 생성
const message = document.createElement("strong");
message.style.display = "none";
message.classList.add("txt_invalid");
main.appendChild(message);
// 뭐라도 입력하면 경고 메시지 없애줌
userTask.addEventListener("input", () => {
  message.style.display = "none";
});

// 다운로드 버튼 생성
const downloadBtn = document.createElement("button");
downloadBtn.classList.add("btn");
downloadBtn.textContent = "리스트 다운로드";
main.appendChild(downloadBtn);
downloadBtn.addEventListener("click", downloadFile);

// 투두를 저장할 배열
const tasks = JSON.parse(localStorage.getItem("tasklist")) || [];

// 초기 화면에서 저장되어있는 데이터를 가지고 목록을 생성합니다.
if (tasks.length > 0) {
  tasks.forEach((task) => {
    genItem(task.val, task.checked);
  });
  showDownload();
}

function createListItem() {
  const inpVal = userTask.value;

  if (inpVal) {
    // input에 값이 있는 채로 등록 버튼이 눌린다면~
    // 할일을 저장하는 객체를 생성한다.
    const tempTask = {
      val: inpVal,
      checked: false,
    };

    // 할일 목록에 새로운 할일을 저장한다.
    tasks.push(tempTask);

    // 목록 요소를 생성한다.
    genItem(inpVal, false);

    // 할일 데이터를 localStorage 에 저장
    saveTasks();

    // 다운로드 버튼 노출 횟수
    showDownload();
  } else {
    errorMsg("내용을 작성해주세요!");
  }
}

// 목록 요소를 생성합니다.
function genItem(val, complete) {
  const li = document.createElement("li");
  li.textContent = val;
  listTodo.appendChild(li);

  // input의 입력 값 초기화
  userTask.value = "";

  // 이미 수행한건지 아닌지 판별
  // 수행했으면(true라면) 취소선 그려지게끔
  if (complete) {
    li.classList.add("done");
  }

  li.addEventListener("click", () => {
    li.classList.toggle("done");

    // 할일 데이터의 업데이트 함수
    buildTasks();
  });

  // 삭제버튼 만들기
  const btn = document.createElement("button");
  btn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  li.appendChild(btn);

  btn.addEventListener("click", () => {
    li.remove();

    // 할일 데이터의 업데이트 함수
    buildTasks();

    // 다운로드 버튼 노출 횟수
    showDownload();
  });
}

// localStorage 에 할일 목록을 저장하는 함수
function saveTasks() {
  localStorage.setItem("tasklist", JSON.stringify(tasks));
}

// 할일 정보를 업데이트 하는 함수입니다. 할일을 클릭했을 때, 혹은 할일을 제거했을 때
function buildTasks() {
  tasks.length = 0; // 업데이트 하기 전에 기존 데이터를 초기화 한다.
  const curList = listTodo.querySelectorAll("li");
  // 할일 정보 목록을 재생성 합니다.
  curList.forEach((el) => {
    const tempTask = {
      val: el.textContent,
      checked: false,
    };

    if (el.classList.contains("done")) {
      tempTask.checked = true;
    }

    tasks.push(tempTask);
  });
  saveTasks();
}

// 다운로드 버튼의 노출을 판단하는 함수
function showDownload() {
  const curList = listTodo.querySelectorAll("li");

  if (curList.length > 0) {
    downloadBtn.style.display = "block";
  } else {
    downloadBtn.style.display = "none";
  }
}
// 경고 메시지 활성화 함수
function errorMsg(msg) {
  message.style.display = "block";
  message.textContent = msg;
  userTask.focus();
}

// 리스트 다운로드 함수
function downloadFile() {
  let temp = "<나의 할일 목록>\n\n";

  const curList = listTodo.querySelectorAll("li");

  curList.forEach((el) => {
    if (el.classList.contains("done")) {
      temp += "완료 - ";
    }
    temp += `${el.textContent}\n`;
  });

  let element = document.createElement("a");
  element.setAttribute("href", `data:text/plain; charset=utf-8, ${temp}`);

  element.setAttribute("download", "todoList.txt");

  // 클릭 가능한 요소라면 클릭을 시뮬레이션 합니다. (마치 클릭한 것과 똑같은 현상 발생)
  element.click();

  // 메모리 상에서 a 태그를 제거합니다.
  element = null;
}
