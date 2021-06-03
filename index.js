const baseUrl = () => {
  const baseUrl = "https://api.themoviedb.org/3";
  const apiKey = `${process.env.movie_Api}`;
  return `${baseUrl}api_key=${apiKey}`;
};

const getMovie = async () => {
const baseUrl = "https://api.themoviedb.org/3";
const apiKey = `${process.env.movie_Api}`
  return await fetch(
`${baseUrl}discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1`)
    .then((response) => response.json())
    .catch((error) => console.log(error))
};

