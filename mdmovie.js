const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzE0ZWY2ODUzNTVlMjM4YzRmYWVmYTIyNTNkOTRjOCIsInN1YiI6IjY2MjViNTFhMjIxYmE2MDE0OTEyYWE0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vhgVb3q-OBme1ROyxR5EqPG_L_-MSts7SbrfHvfxCv0'
  }
};

/*
poster_path     (이미지 주소)
title           (타이틀텍스트)
overview        (내용)
vote_average    (평점)
id              (아이디)
*/
let tmdbdata = {};
console.log('=>', tmdbdata);

let titleOB = [] //소문자 타이틀 // 
console.log("array", titleOB)


let search_code = document.getElementById('mvsearch');
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    console.log(fetch)
    let data = response.results //카드 데이터
    if (Object.keys(tmdbdata).length === 0) { //객체 키들 갯수가 0 일경우
      for (let i = 0; i < data.length; i++) { //카드 데이터 숫자 만큼 반복 (Object.keys(data).length) 이렇게 해야하나 객체 자체에 length: 20을 포함시켜 놓았기 때문에 작동가능
        console.log(data)
        tmdbdata[i] = data[i]; //카드 데이터 tmdbdata 객체에 푸쉬
        let Lowertitle = data[i]['title']
        titleOB.push(Lowertitle.toLowerCase());//소문자로 변환후 타이틀 푸쉬
        if (search_code.value.length === 0) {
          drawcard(i)
        }
      };
    }
  })
  .catch(err => console.error(err));

function Search() { // 검색엔진
  if (search_code.value.length > 0) {
    let serchstr = search_code.value.toLowerCase(); // input 단어를 소문자로 변환
    let strfilter = titleOB.filter((strtitle) => (strtitle.includes(serchstr))); // firlter를 사용하여 titleOB에 includes"input"(일부단어) 가 포함되어있으면 그 문장을 적출"
    let strfind = strfilter.map((strf) => (titleOB.indexOf(strf)));
    let temp_htmlj = ``
    document.querySelector("#mvcards").innerHTML = temp_htmlj;
    strfind.forEach((strnbr) => {
      let j = strnbr
      let imglink = tmdbdata[j]['poster_path'];
      let title = tmdbdata[j]['title'];
      let intext = tmdbdata[j]['overview'];
      let rating = tmdbdata[j]['vote_average'];
      let mvid = tmdbdata[j]['id'];
        
      let temp_html = `
      <article class="card" id="idcard" style="display: block;" data-id=${mvid} onclick="idalert(this)">
            <figure class="cardImg">
                <img src="https://image.tmdb.org/t/p/original${imglink}" alt="None">
            </figure>
            <figure>
                <h3 class="mvname">
                    ${title}
                </h3>
                <p>
                    ${intext}
                </p>
                <P>
                    Rating: ${rating}
                </P>
            </figure>
      </article>
      `
    document.querySelector("#mvcards").insertAdjacentHTML("beforeend", temp_html); // 기존 내용 초기화
    });
  } else {
    let temp_htmly = ``
    document.querySelector("#mvcards").innerHTML = temp_htmly;
    for (let y = 0; y < Object.keys(tmdbdata).length; y++) {
      drawcard(y)
    };
  };
};


function drawcard(x) {
  let imglink = tmdbdata[x]['poster_path'];
  let title = tmdbdata[x]['title'];
  let intext = tmdbdata[x]['overview'];
  let rating = tmdbdata[x]['vote_average'];
  let mvid = tmdbdata[x]['id'];
  

  let temp_html = `
  <article class="card" id="idcard" style="display: block;" data-id=${mvid} onclick="idalert(this)">
          <figure class="cardImg">
              <img src="https://image.tmdb.org/t/p/original${imglink}" alt="None">
          </figure>
          <figure>
              <h3 class="mvname">
                  ${title}
              </h3>
              <p>
                  ${intext}
              </p>
              <P>
                  Rating: ${rating}
              </P>
          </figure>
  </article>
  `
  document.querySelector("#mvcards").insertAdjacentHTML("beforeend", temp_html);
}

function idalert(cardid) {
 let getid = cardid.dataset.id
 alert(`id : ${getid}`)
}

/*
카드 id 띄우기 함수 만드는 것중
또 하나의 방법
function showCardData(card) {
  // 데이터 속성에서 id 값 가져오기
  const cardId = card.getAttribute('data-id');
  alert("Clicked card ID: " + cardId);
*/