import { Undead } from "../Undead";

test.each([
  ['Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.', 'W', 'Undead'], 
  ['Ошибка! Human - неизвестный тип персонажа.', 'Сева', 'Human'], 
  ['Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.', 'Максимилиан', 'Undead'],
])(
  'should throw error %s with name: %s and type: %s', ( errorText, name, type ) => {
    expect(()=>{new Undead(name, type)}).toThrow(errorText);
  
});

  test('should return character to string', () => {
    const result = new Undead('Олег', 'Undead');
    expect(result.toString()).toEqual('Undead Олег (уровень: 1, здоровье: 100, атака: 25, защита: 25)');
  });