import { qoutesList } from './refs';
import { fetchQuotesByTitle, fetchQuotesByCharacter } from './api';

export function createMarkup(quotes) {
  const markup = quotes.reduce(
    (html, { anime, character, quote }) =>
      html +
      `
      <article class="scroll-cards__item" aria-label="Wie - 1">
        <h2 class="anime-title">${anime}</h2>
        <p class="quote">"${quote}"</p>
        <p class="anime-character">${character}</p>
      </article>
  `,
    ''
  );

  qoutesList.innerHTML = markup;
}

export async function renderQuotes(searchOption, keyword) {
  let qoutes;
  if (searchOption === 'character') {
    qoutes = await fetchQuotesByCharacter({
      name: keyword,
    });
    createMarkup(qoutes);
  } else if (searchOption === 'title') {
    qoutes = await fetchQuotesByTitle({ title: keyword });
    createMarkup(qoutes);
  }
}
