fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    
    const totalCountriesInAsia = data.filter(country => country.region === 'Asia');
    console.log('Countries in Asia:', totalCountriesInAsia);

    const countriesPopulation = data.filter(country => country.population < 200000);
    console.log('Countries with population of less than 2 lakhs:', countriesPopulation);

    data.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.svg}`);
    });

    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log('Total population of countries:', totalPopulation);

    const countryUsesUSD = data.find(country => {
      const currency = Object.values(country.currency);
      return currency.includes('USD');
    });
    console.log('Country that uses US dollars as currency:', countryUsesUSD);
  })
  .catch(error => console.log('Error fetching data:', error));