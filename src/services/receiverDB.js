export const findReceivers = () => {
  return fetch('https://radiant-plains-82409.herokuapp.com/api/v1/receivers')
    .then((res) => res.json())
    .then(({ results }) =>
      results.map((result) => ({
        id: result.id,
        manufacturer: result.manufacturer,
        model: result.model,
        country: result.country,
        year: result.year,
      }))
    );
};
