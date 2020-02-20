export const fetchRoles = () => makeJsonRequest('/roles.json')

export const fetchMe = () => makeJsonRequest('/me.json')

export const fetchSurveys = () => makeJsonRequest('/surveys.json')

export const fetchSurvey = id => makeJsonRequest('/surveys.json')
  .then(surveys => surveys.find(s => String(s.id) === String(id)))
  .then(survey => survey || Promise.reject(`Unable to find the survey with id ${id}`))

const makeJsonRequest = (url, options) => fetch(url, options)
  .then(response => response.ok ? response : Promise.reject(response.status))
  .then(response => response.json())
