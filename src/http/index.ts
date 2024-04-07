import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const { REACT_APP_RAPID_API_KEY } = import.meta.env;

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '0f0319e39fmshdfe78451d027e3cp1f2212jsnfbf00ff2cbaa',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url: string | any) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
