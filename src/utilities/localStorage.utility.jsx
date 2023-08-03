// Vamos a guardar los tokens en cookies pero pues este utility nos puede servir para otra cosa
// es un ejemplo

export const persistLocalStorage = (key, value) => {
  // tener cuidado con que cosas guardar aqui
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const clearLocalStorage = (key) => {
  localStorage.removeItem(key);
};
