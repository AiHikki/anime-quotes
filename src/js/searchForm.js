import { form } from './refs';
import { renderQuotes } from './quotes';

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const searchOption = formData.get('searchOption');
  const keyword = formData.get('searchInput').trim();
  renderQuotes(searchOption, keyword);
  form.reset();
}
