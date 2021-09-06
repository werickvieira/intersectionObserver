const Fetcher = (limit, offset) => {
  return fetch(
    `https://dadosabertos.camara.leg.br/api/v2/deputados?formato=json&itens=${limit}&pagina=${offset}`
  )
    .then((res) => res.json())
    .then((data) => data);
};

export default Fetcher;
