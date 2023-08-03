// Get user info, verify
// todo lo que se traiga de otro lado se puede utilizar un servicio para extraer esa logica
const baseUrl = "https://rickandmortyapi.com/api/";

const characterUrl = baseUrl + "character/";

export const getMorty = () => {
  return fetch(characterUrl + "2").then((res) => res.json());
};
