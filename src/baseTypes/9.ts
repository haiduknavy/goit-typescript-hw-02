/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

enum Status {
  Open = 'open',
  Close = 'close',
}

interface Page {
  title: string;
  likes: number;
  accounts: string[];
  status: Status;
  details?: {
    createAt: Date;
    updateAt: Date;
  };
}


export {};