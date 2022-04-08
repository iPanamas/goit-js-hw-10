// Import CSS
import './css/styles.css';

// Import libraries
var _ = require('lodash');
const DEBOUNCE_DELAY = 300;

// ================Imports================ //

// Fetch data
import { fetchCountries } from './js/api/fetchData';

// Render markup
import { renderCountryList } from './js/renderMarkup';
import { renderCountryInfo } from './js/renderMarkup';

// Notification function
import { alertWrongName } from './js/notification';
import { alertTooManyMatches } from './js/notification';

// Reference
import { refs } from './js/refs';

export function onCountryInput() {
  const inputValue = refs.countryInput.value.trim();

  if (inputValue === '') {
    return (refs.countryList.innerHTML = ''), (refs.countryInfo.innerHTML = '');
  }

  fetchCountries(inputValue)
    .then(countries => {
      refs.countryList.innerHTML = '';
      refs.countryInfo.innerHTML = '';
      if (countries.length === 1) {
        refs.countryInfo.insertAdjacentHTML('beforeend', renderCountryInfo(countries));
      } else if (countries.length >= 10) {
        alertTooManyMatches();
      } else {
        refs.countryList.insertAdjacentHTML('beforeend', renderCountryList(countries));
      }
    })
    .catch(alertWrongName);
}
refs.countryInput.addEventListener('input', _.debounce(onCountryInput, DEBOUNCE_DELAY));
