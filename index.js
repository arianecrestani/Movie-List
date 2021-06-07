// API Setup
let responseData ={};

const movie_Api = "af4c11d1c7c756c2429ca0c3cf65c08c";
const baseUrl = (endpoint) => {
  const baseUrl = "https://api.themoviedb.org/3";
  const apiKey = `${movie_Api}`;
  return `${baseUrl}/${endpoint}&api_key=${apiKey}`;
};

const apiRequest = async (endpoint) => {
  return await fetch(baseUrl(endpoint))
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

// Endpoints

const getMovie = () => {
  return "discover/movie?language=en-US&sort_by=popularity.desc&page=1";
};

// UI

const searchBtn = document.getElementById("searchBtn");
const textArea = document.getElementById("textArea");

const BtnEventHandler = () => {
  updateUi();
};

searchBtn.addEventListener("click", BtnEventHandler);

const createMovie = (element) => {
  const div = document.createElement("div");

  const title = document.getElementById("title");
  const overview = document.getElementById("overview");
  const poster = document.getElementById("poster");
  const date = document.getElementById("date");
  const nota = document.getElementById("nota");

  //
  title.innerHTML = json.title ? json.title : "";
  overview.innerHTML = `${json.overview ? json.overview : ""}`;
  poster.innerHTML = json.poster ? json.poster : "";
  date.innerHTML = json.date ? json.date : "";
  nota.innerHTML = json.nota ? json.nota : "";

  return div;
};
//for each element do results retorn a elemnt

const updateUi = (json) => {
  console.log(json);

  json.results.forEach((element) => {
    const newElement = {
      title: element.original_title,
      overview: element.overview,
      poster: element.poster_path,
      date: element.release_date,
      nota: element.vote_average,
    };
    const movieDiv = createMovie(newElement);
    
  });
};

// Run code show in the console.log

apiRequest(getMovie()).then((json) => updateUi(json));