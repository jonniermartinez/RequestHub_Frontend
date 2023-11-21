export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
  category: string | any;
};

export type Task1 = {
  id: Id;
  category: string | any;
  // id_pqr: Id;
};

export type Task2 = {
  id: Id;
};