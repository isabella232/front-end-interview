const data = require('./ins-data.json')

//TODO: Fill with countries taken from the data object
export function getCountries() {
  //Dummy answer
  return ['Kenya', 'Tanzania']
}

//TODO: Fill with camps taken from the data object filtered by country
export function getCamps(country) {
  //Dummy answer
  return ['Kakuma', 'Omaka']
}

//TODO: Fill with total lessons taken from the data object filtered by country
export function getLessonsByYear(country) {
  //Dummy answer
  return {
    years: ['2018', '2019', '2020'],
    lessons: [100, 150, 130]
  }
}
