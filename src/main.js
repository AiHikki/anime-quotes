import './js/api';
import './js/quotes';
import './js/searchForm';
import './js/canvas';

import { fetchRandomQuotes } from './js/api';
import { createMarkup } from './js/quotes';

async function renderRandomQuotes() {
  const qoutes = await fetchRandomQuotes();
  createMarkup(qoutes);
}

renderRandomQuotes();
