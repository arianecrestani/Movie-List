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

const updateUI = (json) => {
  console.log(json);
  
  // 


}

// Run code

apiRequest(getMovie()).then((json) => updateUI(json));
