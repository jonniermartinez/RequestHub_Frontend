export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};
interface Category {
  category: string;
}
export type Task = {
  id: Id;
  columnId: Id;
  content: string;
  category: Category[]; // Define category as an array of objects with a 'category' string property
  subject: string;
  state: string;
};

export type Task1 = {
  id: Id;
  category: string;
  // id_pqr: Id;
};

export type Task2 = {
  id: Id;
};

export type Task3 = {
  state: string;
  id: Id;
};
