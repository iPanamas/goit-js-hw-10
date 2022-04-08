export function renderCountryList(countries) {
  const markup = countries
    .map(({ name, flags }) => {
      return `<li class="country-list__item">
          <h2 class="country-list__title"><img class="country-list__image" src="${flags.svg}" alt="Flag of ${name.official}" width = 50px height = 30px>${name.official}</h2>
          </li>`;
    })
    .join('');
  return markup;
}

export function renderCountryInfo(countries) {
  const markup = countries
    .map(({ name, flags, capital, population, languages }) => {
      return `<ul class="country-info__list">
      <li class="country-info__item"><h1 class="country-info__title"><img class="country-info__image" src="${
        flags.svg
      }" alt="Flag of ${name.official}" width = 50px height = 30px>${name.official}</h1></li>
      <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
      <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
      <li class="country-info__item"><p><b>Languages: </b>${Object.values(languages).join(
        ', ',
      )}</p></li></ul>`;
    })
    .join('');
  return markup;
}
