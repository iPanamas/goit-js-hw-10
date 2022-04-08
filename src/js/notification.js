// Import libraries
import Notiflix, { Notify } from 'notiflix';

export function alertTooManyMatches() {
  Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
}

export function alertWrongName() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
