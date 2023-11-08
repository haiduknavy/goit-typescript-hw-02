/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(obj: Pick<AllType, keyof AllType>, obj2: Pick<AllType, keyof AllType>): AllType {
  return {
    name: obj.name,
    color: obj.color,
    position: obj2.position,
    weight: obj2.weight,
  };
}

export {};
