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