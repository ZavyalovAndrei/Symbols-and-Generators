import { Zombie } from "../Zombie";

test.each([
  ['Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.', 'W', 'Zombie'], 
  ['Ошибка! Human - неизвестный тип персонажа.', 'Сева', 'Human'], 
  ['Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.', 'Максимилиан', 'Zombie'],
])(
  'should throw error %s with name: %s and type: %s', ( errorText, name, type ) => {
    expect(()=>{new Zombie(name, type)}).toThrow(errorText);
  
});

  test('should return character to string', () => {
    const result = new Zombie('Олег');
    expect(result.toString()).toEqual('Zombie Олег (уровень: 1, здоровье: 100, атака: 40, защита: 10)');
  });