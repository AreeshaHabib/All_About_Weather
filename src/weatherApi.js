
const API_KEY = "75656416a69cbcfb8040f5a7d1bedac6";


const fetchApi = async (city, units = 'metric') => {
     const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`;

     const response = await fetch(URL)
          .then((res) => res.json())
          .then((data) => data);


     const data = {
          city: response.city,
          list: [response.list[0], response.list[8], response.list[16], response.list[24], response.list[32]]
     }

     return data
};

export { fetchApi };   