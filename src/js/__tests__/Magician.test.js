import { Magician } from "../Magician";

test.each([
  ['Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.', 'W', 'Magician'], 
  ['Ошибка! Human - неизвестный тип персонажа.', 'Сева', 'Human'], 
  ['Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.', 'Максимилиан', 'Magician'],
])(
  'should throw error %s with name: %s and type: %s', ( errorText, name, type ) => {
    expect(()=>{new Magician(name, type)}).toThrow(errorText);
  
});

  test('should return character to string', () => {
    const result = new Magician('Олег', 'Magician');
    expect(result.toString()).toEqual('Magician Олег (уровень: 1, здоровье: 100, атака: 10, защита: 40)');
  });