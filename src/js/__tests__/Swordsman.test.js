import { Swordsman } from "../Swordsman";

test.each([
  ['Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.', 'W', 'Swordsman'], 
  ['Ошибка! Human - неизвестный тип персонажа.', 'Сева', 'Human'], 
  ['Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.', 'Максимилиан', 'Swordsman'],
])(
  'should throw error %s with name: %s and type: %s', ( errorText, name, type ) => {
    expect(()=>{new Swordsman(name, type)}).toThrow(errorText);
  
});

  test('should return character to string', () => {
    const result = new Swordsman('Олег');
    expect(result.toString()).toEqual('Swordsman Олег (уровень: 1, здоровье: 100, атака: 40, защита: 10)');
  });