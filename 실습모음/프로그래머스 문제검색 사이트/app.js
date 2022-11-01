const form = document.querySelector("#searchForm");
const input = document.querySelector("input");
const btn = document.querySelector(".searchBtn");
const view = document.querySelector(".view");
const ul = document.querySelector(".problemList");

// 검색 시 찾을 problem 배열
let problemArr = [];

// 데이터 받아오기
async function getData() {
  try {
    const response = await fetch(
      "https://school.programmers.co.kr/api/v1/school/challenges/?page=1&perPage=20&languages[]=javascript&order=acceptance_desc"
    );

    const { result: problemList, totalPages } = await response.json();

    for (let i = 2; i <= totalPages; i++) {
      let page = await fetch(
        `https://school.programmers.co.kr/api/v1/school/challenges/?page=${i}&perPage=20&languages[]=javascript&order=acceptance_desc`
      );
      const { result } = await page.json();
      problemList.push(...result);

      problemList.forEach((problem) => {
        view.append(problemDraw(problem));
      });
      problemArr = [...problemList];
    }
  } catch (e) {
    console.log(e);
  }
}

function problemDraw(problem) {
  const problemLink = document.createElement("a");
  problemLink.href = `https://school.programmers.co.kr/learn/courses/30/lessons/${problem.id}`;
  problemLink.innerHTML = `
        <li class="problemItem">
                    <div>
                        <h2 class="problemTitle">${problem.title}</h2>
                        <p class="partTitle">${problem.partTitle}</p>
                    </div>
                    <span class="level">Lv.${problem.level}</span>
                </li>`;
  ul.append(problemLink);
  return ul;
  // console.log(problem);
}

// getData().then((problemList) => {
//   problemList.forEach((problem) => {
//     const problemLink = document.createElement("a");
//     problemLink.href = `https://school.programmers.co.kr/learn/courses/30/lessons/${problem.id}`;
//     problemLink.innerHTML = `
//     <li class="problemItem">
//                 <div>
//                     <h2 class="problemTitle">${problem.title}</h2>
//                     <p class="partTitle">${problem.partTitle}</p>
//                 </div>
//                 <span class="level">Lv.${problem.level}</span>
//             </li>`;
//     ul.append(problemLink);
//     // console.log(problem);
//   });
// });

function searchProblem(e) {
  e.preventDefault();
  const searchValue = input.value;
  const searchItem = problemArr.filter(
    (problem) => problem.title === searchValue
  );

  searchItem.forEach((problem) => {
    view.innerHTML = "";
    view.append(problemDraw(problem));
    console.log(problem);
  });
  input.value = "";
}

form.addEventListener("submit", searchProblem);

getData();
