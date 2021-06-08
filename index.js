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

const createTitle = (title) => {
//criar div title e colocar valor innerhtml 
//e retornar
  const titleDiv = document.createElement('div');
  titleDiv.id = "titleMovie"
  titleDiv.innerHTML = title;
   
  return titleDiv

}

const createOverview = (overview) => {
  const overviewDiv = document.createElement('div');
  overviewDiv.id = "overviewDiv"
  overviewDiv.innerHTML = overview

  return overviewDiv
}

const createMovie = (element) => {


  const div = document.createElement("div");
  const title = createTitle(element.original_title);
  div.appendChild(title);

  const overview = createOverview(element.overview);
  div.appendChild(overview)

  


  // const overview = document.getElementById("overview");
  // const poster = document.getElementById("poster");
  // const date = document.getElementById("date");
  // const nota = document.getElementById("nota");

  // //
  // title.innerHTML = element.original_title ? element.original_title : "";
  // overview.innerHTML = `${element.overview ? element.overview : ""}`;
  // poster.innerHTML = element.poster_path ? element.poster_path: "";
  // date.innerHTML = element.release_date? element.release_date : "";
  // nota.innerHTML = element.vote_average ? element.vote_average: "";

  return div;
};
//for each element do results retorn a elemnt

const updateUi = (json) => {
  console.log(json);
  
  const movies = document.getElementById("movies");

  json.results.forEach((element) => {
    const newElement = {
      title: element.original_title,
      overview: element.overview,
      poster: element.poster_path,
      date: element.release_date,
      nota: element.vote_average,
    };
    const movieDiv = createMovie(newElement);
    movies.appendChild(movieDiv);
  });
};

// Run code show in the console.log

apiRequest(getMovie()).then((json) => updateUi(json));