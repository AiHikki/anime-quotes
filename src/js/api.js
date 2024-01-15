import axios from 'axios';

import { showError } from './iziToast';

const instance = axios.create({
  baseURL: 'https://animechan.xyz/api/',
});

async function fetchRandomQuotes() {
  try {
    const response = await instance.get('quotes');
    return response.data;
  } catch (error) {
    showError('Oops, something has gone wrong');
    console.error(error);
  }
}

async function fetchQuotesByTitle(params) {
  try {
    const response = await instance.get('quotes/anime', {
      params,
    });
    return response.data;
  } catch (error) {
    showError("Oops! We couldn't find any results for your search");
    console.log(error);
  }
}

async function fetchQuotesByCharacter(params) {
  try {
    const response = await instance.get('quotes/character', {
      params,
    });
    return response.data;
  } catch (error) {
    showError("Oops! We couldn't find any results for your search");
    console.log(error);
  }
}

export { fetchRandomQuotes, fetchQuotesByTitle, fetchQuotesByCharacter };
