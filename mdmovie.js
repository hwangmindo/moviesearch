/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { 
  getFirestore,
  collection, 
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyrmNcww5pjkua4iGZhmda8VOxJuVHIZQ",
  authDomain: "moviesearch-ad917.firebaseapp.com",
  projectId: "moviesearch-ad917",
  storageBucket: "moviesearch-ad917.appspot.com",
  messagingSenderId: "749998468373",
  appId: "1:749998468373:web:4b5fefa29b49f086ef8d1c",
  measurementId: "G-R710L66HL5"
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
*/

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzE0ZWY2ODUzNTVlMjM4YzRmYWVmYTIyNTNkOTRjOCIsInN1YiI6IjY2MjViNTFhMjIxYmE2MDE0OTEyYWE0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vhgVb3q-OBme1ROyxR5EqPG_L_-MSts7SbrfHvfxCv0'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    
  
  function Search() {
    let search_code = document.getElementById('mvsearch').value;
    alert(search_code);
  };
  

/*
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
        const movies = data.results; // 'results' 키의 값 추출
        console.log(movies); // 영화 목록 출력
    })
    .catch(err => console.error(err));
    

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())  // 응답을 JSON으로 파싱
    .then(data => {
        const movies = data.results; // 'results' 키의 값 추출
        console.log(movies); // 영화 목록 출력
    })
    .catch(err => console.error(err));  // 오류가 발생할 경우 처리
    */