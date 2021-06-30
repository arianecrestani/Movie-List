// API Setup

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

//the parameter of query is textArea where I such for movies
const getMovie = (query) => `search/movie?language=en-US&query=${query}&page=1`;
const getPopularity = () =>
  `movie/popular?language=en-US&sort_by=popularity.desc&page=1`;
const getTopRated = () =>
  `movie/top_rated?language=en-US&sort_by=popularity.desc&page=1`;

const searchBtn = document.getElementById("searchBtn");
const textArea = document.getElementById("textArea");
const popularBtn = document.getElementById("popularBtn");
const topRatedBtn = document.getElementById("topRatedBtn");

const btnEventHandler = () => {
  apiRequest(getMovie(textArea.value)).then((json) => updateUi(json));
};
const enterPress = (e) => {
  if (e.key === "Enter") {
    btnEventHandler();
  }
};

const btnPopularity = () => {
  apiRequest(getPopularity(textArea.value)).then((json) => updateUi(json));
};

const btnTopRated = () => {
  apiRequest(getTopRated(textArea.value)).then((json) => updateUi(json));
};

searchBtn.addEventListener("click", btnEventHandler);
textArea.addEventListener("keypress", enterPress);
popularBtn.addEventListener("click", btnPopularity);
topRatedBtn.addEventListener("click", btnTopRated);

const createTitle = (title) => {
  //criar div title e colocar valor innerhtml
  //e retornar
  const titleDiv = document.createElement("div");
  titleDiv.id = "titleMovie";
  titleDiv.innerHTML = title;

  return titleDiv;
};

const createOverview = (overview) => {
  const overviewDiv = document.createElement("div");
  overviewDiv.id = "overviewMovie";
  overviewDiv.innerHTML = overview;

  return overviewDiv;
};
const createPoster = (poster) => {
  const posterDiv = document.createElement("div");
  posterDiv.id = "posterMovie";

  if (poster === null) {
    posterDiv.innerHTML = `<img src="https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png"/>`;
  } else {
    posterDiv.innerHTML = `<img src="https://image.tmdb.org/t/p/w185/${poster}"/>`;
  }

  return posterDiv;
};

const createDate = (date) => {
  const dateDiv = document.createElement("div");
  dateDiv.id = "dateMovie";
  const newDate = new Date(date);
  dateDiv.innerHTML =
    newDate.getDate() +
    "/" +
    (1 + newDate.getMonth()) +
    "/" +
    newDate.getFullYear();

  return dateDiv;
};

const createNota = (nota) => {
  const notaDiv = document.createElement("div");
  notaDiv.id = "notaMovie";
  notaDiv.innerHTML = nota;

  return notaDiv;
};

const createMovie = (element) => {
  const div = document.createElement("div");
  div.id = "movieSection";

  const title = createTitle(element.original_title);
  div.appendChild(title);

  const poster = createPoster(element.poster_path);
  poster.src = element.poster_path;
  div.appendChild(poster);

  const overview = createOverview(element.overview);
  div.appendChild(overview);

  const date = createDate(element.release_date);
  div.appendChild(date);

  const nota = createNota(element.vote_average);
  div.appendChild(nota);

  return div;
};

//for each element do results retorn a elemnt

const updateUi = (json) => {
  const movies = document.getElementById("movies");
  //cleanig input
  movies.innerHTML = "";

  json.results.forEach((element) => {
    const newElement = {
      original_title: element.original_title,
      overview: element.overview,
      poster_path: element.poster_path,
      release_date: element.release_date,
      vote_average: element.vote_average,
    };

    const movieDiv = createMovie(newElement);
    movies.appendChild(movieDiv);
  });
};

// Run code show in the console.log
