
export const categories = [
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "general",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
    name: "business",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
    name: "entertainment",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
    name: "health",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
    name: "science",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
    name: "sports",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
    name: "technology",
  },
];

export const country = [
  {
    code: "in",
    name: "India",
  },
  {
    code: "us",
    name: "USA",
  },
  {
    code: "au",
    name: "Australia",
  },
  {
    code: "ru",
    name: "Russia",
  },
  {
    code: "fr",
    name: "France",
  },
  {
    code: "gb",
    name: "United Kingdom",
  },
];

export const sources = [
  {
    id: "bbc.co.in",
    name: "BBC News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
  },
  {
    id: "cnn",
    name: "CNN",
    pic: "https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png",
  },
  {
    id: "fox-news",
    name: "Fox News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
  },
  {
    id: "google-news",
    name: "Google News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
  },
];

export const BASE_URL = "https://saurav.tech/NewsAPI/";
const apiKey = "81ea460426154f9f96bac3d8a542fe19";
export const getNewsAPI = (category, country = "in") => {
  return `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`
};

export const getSourceAPI = (source) => {
  // return `${BASE_URL}/everything/${source}.json`;
  return `https://newsapi.org/v2/everything?domains=${source},thenextweb.com&apiKey=${apiKey} `

};