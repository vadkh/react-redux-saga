const API_ROOT = 'https://api.ratesapi.io/api/latest';

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
export function callApi(endpoint = '') {
  const fullUrl = endpoint.includes(API_ROOT) ? endpoint : API_ROOT + endpoint;

  return fetch(fullUrl)
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return { ...json };
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happened' })
    );
}
