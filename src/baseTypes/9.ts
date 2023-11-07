/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

interface Page {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: Date;
    updateAt?: Date;
  };
}

export {};