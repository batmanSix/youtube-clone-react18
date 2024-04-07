import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const { REACT_APP_RAPID_API_KEY } = import.meta.env;

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'ab5deb5f6bmsh503cc98ec9fec87p10b9bfjsnc2bbbd734c8b',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url: string | any) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
